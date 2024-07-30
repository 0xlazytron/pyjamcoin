import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

interface ConnectWalletProps {
  text: string;
}

export const ConnectWallet: React.FC<ConnectWalletProps> = ({ text }) => {
  const wallet = useWallet();
  return (
    <div
      className={`text-white border-purple-500 flex gap-2 items-center shadow-lg shadow-purple-500 border btnn py-1 px-6 rounded-full cursor-pointer`}
    >
      <WalletMultiButton
        style={{
          padding: 0,
          height: "100%",
          flex: 1,
          backgroundColor: "transparent",
        }}
        children={
          <span className={"w-max"}>
            {wallet.connected ? "Connected" : text}
          </span>
        }
      />
    </div>
  );
};

