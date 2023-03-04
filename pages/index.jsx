import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { loadMyLib } from "../../hardal/dist/index";

export default function Home() {
  const { address, isConnecting, isDisconnected } = useAccount();

  console.log(address, isConnecting, isDisconnected);

  loadMyLib();

  return (
    <div>
      <main className={styles.main}>
        <InstructionsComponent></InstructionsComponent>
      </main>
    </div>
  );
}
