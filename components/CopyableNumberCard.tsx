import React from 'react';
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js'
import Btn from './ui/Btn'
import { active_network } from 'config'
import { useWallet } from '@solana/wallet-adapter-react'
import { useState } from 'react'
import { useRef } from 'react'
import { DESTINATION_WALLET, useBalance } from 'hooks'
import { useCallback } from 'react'
// @ts-ignore
import toast from 'react-hot-toast'
import { addData } from '../hooks/firebase'
import { useEffect } from 'react'
import { getRaised, getTransactions } from '../hooks/firebase'
const CopyableNumberCard: React.FC = () => {
  const numberToCopy = '5dL1GxM52CAXjXpQdb8sMogSJrjGuGAp2kEwsyPEorcj';
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleCopyClick = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(numberToCopy)
        .then(() => {
          setTooltipVisible(true);
          setTimeout(() => setTooltipVisible(false), 2000); // Tooltip für 2 Sekunden anzeigen
        })
        .catch(err => {
          console.error('Error copying to clipboard: ', err);
        });
    } else {
      // Fallback für ältere Browser
      const textArea = document.createElement('textarea');
      textArea.value = numberToCopy;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setTooltipVisible(true);
        setTimeout(() => setTooltipVisible(false), 2000); // Tooltip für 2 Sekunden anzeigen
      } catch (err) {
        console.error('Error copying using execCommand: ', err);
      }
      document.body.removeChild(textArea);
    }
  };
  // const connection = new Connection(clusterApiUrl('devnet'));
  const connection = new Connection(active_network)
  const { publicKey, sendTransaction } = useWallet()
  const [trx, setTrx] = useState('')
  const [raised, setRaised] = useState(0)
  const [transactionCount, setTransactionCount] = useState(0)
  const [raised_percentage, setRaisedPercentage] = useState('0')
  const [participants, setParticipants] = useState(0)
  const inputRef = useRef(null)
  const [sol_spend_amount, setSolSpendAmount] = useState(1)
  const balance = useBalance()
  const [value, setValue] = useState('presale')
  const [active, setActive] = useState(50)
  const [working, setWorking] = useState(false)
  const handleTransfer = useCallback(async () => {
    console.log('sol_spend_amount', sol_spend_amount)
    if (!publicKey) {
      toast('Please Connect Wallet First', {
        icon: "💡",
        duration: 4000,
      });
    }


    if (sol_spend_amount == 0 || working) {
      toast.error('Enter a valid amount of SOL',
        {
          duration: 4000,
        }
      )
      return
    }
    if (sol_spend_amount < 0.1 || sol_spend_amount > 250) {
      toast.error('you can spend 0.1 to 250 SOLS',
        {
          duration: 4000,
        }
      )
      return
    }
    if (publicKey && sol_spend_amount > balance) {
      toast.error(
        `You want to spend ${sol_spend_amount} SOLs but your balance is ${balance}`,
        {
          duration: 4000,
        }
      )
      return
    }
    setWorking(true)

    const share = sol_spend_amount * LAMPORTS_PER_SOL

    console.log('Share', share)
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey!,
        toPubkey: new PublicKey(DESTINATION_WALLET),
        lamports: share,
      }),
    )

    let raised_amount = share / LAMPORTS_PER_SOL
    try {
      const signature = await sendTransaction(transaction, connection)
      const toastId = toast.loading('Loading...');
      setTrx(`https://solscan.io/tx/${signature}`)
      console.log(`https://solscan.io/tx/${signature}`)
      toast.dismiss(toastId);
      const Trx = `https://solscan.io/tx/${signature}?cluster=devnet`;

      toast.custom(
        <div style={{ backgroundColor: 'black', color: 'white', padding: '10px', borderRadius: '5px' }}>
          <span style={{ color: 'green', marginRight: '5px' }}>✔</span> {/* Green tick */}
          Purchase successful{' '}
          <a href={Trx} target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
            view transaction
          </a>
        </div>
      );

      // Handle successful transfer here
    } catch (error) {
      raised_amount = 0
      console.error('Transaction failed:', error)
      // Handle transaction failure here
    }
    setWorking(false)
    if (publicKey !== null) {
      addData(raised_amount, publicKey!.toBase58())
    }
  }, [publicKey, sendTransaction, connection, sol_spend_amount])

  useEffect(() => {
    getRaised().then((amount) => {
      setRaised(amount)
    })

    getTransactions().then((count) => {
      setTransactionCount(count)
    })
  }, [])
  return (
    <div className="w-[400px] h-[400px] mx-auto bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 group relative mb-28 flex justify-center items-center">
      <div className="flex flex-col gap-5 w-[600px] justify-center p-5 h-full items-center ">
        <div className="flex items-center h-fit justify-center">
          <h2 className="font-semibold bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60  text-xl text-center">
            1 SOL = 50,000 $PYJAMA COIN
          </h2>
        </div>
        <div className=" text-center">
          <div className="text-[16px] text-slate-400">Current Raise {raised.toFixed(3)}
          </div>
        </div>
        <div className="text-center">

          <input
            onChange={(e) => {
              setSolSpendAmount(+e.target.value)
            }}
            defaultValue="0.1 - 250 sols"
            type="number"
            placeholder="0.1 - 250 sols"
            className="bg-[#000] pl-3 border rounded-[20px] border-[#ffffff] py-[0.5rem] md:w-auto w-[300px] "
          />

        </div>

        <div className="text-xs md:text- flex-col gap-1 font-bold text-teal-500 flex items-center relative justify-center mb-2">
          <p className='text-center py-2 text-white text-[16px] '>Wallet Address</p>
          {numberToCopy}
        </div>
        <div className="flex items-center relative">
          <svg
            onClick={handleCopyClick}
            className="ml-2 cursor-pointer fill-slate-500 hover:fill-slate-700"
            width="15"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" />
          </svg>
          <span className="ml-2 text-gray-400 cursor-pointer" onClick={handleCopyClick}>copy</span>
          {tooltipVisible && (
            <div className="absolute top-full mt-2 w-max bg-gray-800 text-white text-xs px-2 py-1 rounded">
              copied!
            </div>
          )}



        </div>
        <Btn
          onClick={() => {
            handleTransfer()
          }}
          text={'BUY NOW'}
          style=""
        />
      </div>
    </div>
  );
};

export default CopyableNumberCard;
