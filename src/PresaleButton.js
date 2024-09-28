// src/PresaleButton.js
import React, { useState, useEffect } from 'react';
import { Connection, PublicKey, clusterApiUrl, Transaction, SystemProgram } from '@solana/web3.js';
import './PresaleButton.css'; // Separate CSS-Datei für die Komponente
import JoinButtonImage from './assets/bilder/JoinButton.png'; // Importiere das JoinButton-Bild

const PresaleButton = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [solAmount, setSolAmount] = useState('');

  // Definiere die Ziel-Wallet-Adresse für den Presale
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

    // Validierung des eingegebenen Betrags
    const lamports = parseFloat(solAmount) * 1e9; // 1 SOL = 1,000,000,000 Lamports
    if (isNaN(lamports) || lamports <= 0) {
      alert('Bitte gib einen gültigen Betrag in SOL ein.');
      return;
    }

    setIsSending(true);
    setTransactionStatus(null);

    try {
      const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');
      const senderPublicKey = new PublicKey(walletAddress);
      const receiverPublicKey = presaleWalletAddress;

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: senderPublicKey,
          toPubkey: receiverPublicKey,
          lamports: lamports,
        })
      );

      const { solana } = window;

      if (solana) {
        const { signature } = await solana.signAndSendTransaction(transaction);
        console.log('Transaktion gesendet mit Signatur:', signature);
        setTransactionStatus(`Transaktion erfolgreich! Signature: ${signature}`);
        setIsModalOpen(false); // Schließe das Modal nach erfolgreicher Transaktion
        setSolAmount(''); // Reset des Betrags
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
        <button className="joinButton" onClick={connectWallet}>
          <img src={JoinButtonImage} alt="Join Button" className="joinButtonImage" />
          <span className="joinButtonText">JOIN</span>
        </button>
      ) : (
        <button className="joinButton" onClick={() => setIsModalOpen(true)} disabled={isSending}>
          <img src={JoinButtonImage} alt="Join Button" className="joinButtonImage" />
          <span className="joinButtonText">JOIN</span>
        </button>
      )}
      {transactionStatus && <p className="transactionStatus">{transactionStatus}</p>}

      {/* Modal */}
      {isModalOpen && (
        <div className="modalOverlay">
          <div className="modalContent">
            <h2>Presale SOL senden</h2>
            <input
              type="number"
              placeholder="Betrag in SOL"
              value={solAmount}
              onChange={(e) => setSolAmount(e.target.value)}
              className="solInput"
              min="0"
              step="0.0001"
            />
            <div className="modalButtons">
              <button className="confirmButton" onClick={sendSOL} disabled={isSending}>
                {isSending ? 'Senden...' : 'Bestätigen'}
              </button>
              <button className="cancelButton" onClick={() => setIsModalOpen(false)} disabled={isSending}>
                Abbrechen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PresaleButton;
