// src/components/TokenProgressLive.js
import React, { useEffect, useState } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import './TokenProgressLive.css';
import ProgressBarImage from './assets/bilder/ProgressBar.png';

const fetchSolBalance = async (connection, walletAddress) => {
  try {
    const pubkey = new PublicKey(walletAddress);
    const balance = await connection.getBalance(pubkey);
    return balance / 1e9; // Konvertiere Lamports zu SOL
  } catch (error) {
    console.error('Fehler beim Abrufen der SOL-Balance:', error);
    return 0;
  }
};

const ProgressBar = ({ current, target }) => {
  const percentage = Math.min((current / target) * 100, 100);

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar-fill"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

const TokenProgressLive = () => {
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState(null);

  const walletAddress = '827mva9RPd9wraF6gBGqTf6w1sqW5Kbi7kvaHr2zGu5N';
  const targetAmount = 1;
  const rpcUrl = process.env.REACT_APP_SOLANA_RPC_URL;
  const connection = new Connection(rpcUrl, 'confirmed');

  useEffect(() => {
    let subscriptionId;
    let isMounted = true;

    const updateBalance = async () => {
      try {
        const bal = await fetchSolBalance(connection, walletAddress);
        if (isMounted) {
          setBalance(bal);
          setError(null);
        }
      } catch (error) {
        if (isMounted) {
          setError('Fehler beim Abrufen der SOL-Balance.');
        }
      }
    };

    const subscribeToBalanceChanges = async () => {
      try {
        const pubkey = new PublicKey(walletAddress);
        subscriptionId = connection.onAccountChange(
          pubkey,
          async (accountInfo, context) => {
            await updateBalance();
          },
          'singleGossip'
        );

        await updateBalance();
      } catch (error) {
        if (isMounted) {
          setError('Fehler beim Abonnieren der Account-Änderungen.');
        }
      }
    };

    subscribeToBalanceChanges();

    const interval = setInterval(updateBalance, 30000); // Alle 30 Sekunden

    return () => {
      isMounted = false;
      if (subscriptionId !== undefined) {
        connection.removeAccountChangeListener(subscriptionId);
      }
      clearInterval(interval);
    };
  }, [connection, walletAddress]);

  return (
    <div className="progressOverlay">
      <img src={ProgressBarImage} alt="Progress Background" className="background-image" />
      <div className="progress-content">
        {error ? (
          <p className="error-text">{error}</p>
        ) : (
          <>
            <ProgressBar current={balance} target={targetAmount} />
            <p className="balance-text">{balance.toFixed(2)} / {targetAmount} SOL</p>
          </>
        )}
      </div>
    </div>
  );
};

export default TokenProgressLive;
