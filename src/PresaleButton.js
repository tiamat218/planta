// src/PresaleButton.js
import React, { useState, useEffect } from 'react';
import { Connection, PublicKey, clusterApiUrl, Transaction, SystemProgram } from '@solana/web3.js';
import './PresaleButton.css'; // Optional: Separate CSS-Datei für die Komponente

const PresaleButton = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState(null);

  // Definiere die Ziel-Wallet-Adresse für den Presale
  // Ersetze 'DEINE_GÜLTIGE_PRESALE_WALLET_ADRESSE_HIER' mit deiner tatsächlichen Wallet-Adresse
  const presaleWalletAddress = new PublicKey('827mva9RPd9wraF6gBGqTf6w1sqW5Kbi7kvaHr2zGu5N');

  useEffect(() => {
    // Überprüfe, ob Phantom Wallet installiert ist
    const checkIfWalletIsConnected = async () => {
      try {
        const { solana } = window;

        if (solana && solana.isPhantom) {
          console.log('Phantom Wallet gefunden!');
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log('Verbunden mit Wallet:', response.publicKey.toString());
          setWalletAddress(response.publicKey.toString());
        } else {
          console.log('Phantom Wallet ist nicht installiert.');
        }
      } catch (error) {
        console.error('Fehler beim Verbinden der Wallet:', error);
      }
    };

    checkIfWalletIsConnected();
  }, []);

  // Funktion zum Verbinden der Wallet (falls noch nicht verbunden)
  const connectWallet = async () => {
    try {
      const { solana } = window;

      if (solana) {
        const response = await solana.connect();
        console.log('Verbunden mit Wallet:', response.publicKey.toString());
        setWalletAddress(response.publicKey.toString());
      }
    } catch (error) {
      console.error('Fehler beim Verbinden der Wallet:', error);
    }
  };

  // Funktion zum Senden von SOL
  const sendSOL = async () => {
    if (!walletAddress) {
      alert('Bitte verbinde zuerst deine Wallet.');
      return;
    }

    setIsSending(true);
    setTransactionStatus(null);

    try {
      const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');
      const senderPublicKey = new PublicKey(walletAddress);
      const receiverPublicKey = presaleWalletAddress;

      // Definiere den Betrag in Lamports (1 SOL = 1,000,000,000 Lamports)
      const amount = 1 * 1e9; // Beispiel: 1 SOL

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: senderPublicKey,
          toPubkey: receiverPublicKey,
          lamports: amount,
        })
      );

      const { solana } = window;

      if (solana) {
        const signature = await solana.signAndSendTransaction(transaction);
        console.log('Transaktion gesendet mit Signatur:', signature.signature);
        setTransactionStatus(`Transaktion erfolgreich! Signature: ${signature.signature}`);
      }
    } catch (error) {
      console.error('Fehler beim Senden der Transaktion:', error);
      setTransactionStatus('Fehler beim Senden der Transaktion.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="presaleButtonContainer">
      {!walletAddress ? (
        <button className="connectWalletButton" onClick={connectWallet}>
          Wallet verbinden
        </button>
      ) : (
        <button className="sendSOLButton" onClick={sendSOL} disabled={isSending}>
          {isSending ? 'Senden...' : 'SOL an Presale senden'}
        </button>
      )}
      {transactionStatus && <p className="transactionStatus">{transactionStatus}</p>}
    </div>
  );
};

export default PresaleButton;
