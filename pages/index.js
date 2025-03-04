import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useState } from "react";
import { handleSubmit } from "../lib/handleSubmit"; // Import the handleSubmit function

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  return (
    <>
      <Head>
        <title>Time Harvest</title>
        <link rel="icon" href="favicon.png" type="image/x-icon"></link>
      </Head>
      <div className={styles.container}>
        <h1>Time Harvest</h1>
        <h3>A game made by Dumi</h3>
        <div className={styles.description}>
          <p>Time Harvest is a game where you progress through different technologies while trying to become the best farmer there ever was</p>
          <p>You can find it here:</p>
          <ul>
            <li><a href="https://n0tm3123.itch.io/time-harvest"><button className="itch">Play it here</button></a></li>
            <li><a href="https://hackclub.slack.com/archives/C08B0TRLQMN"><button className="slack">Follow the game's development here</button></a></li>
          </ul>
        </div>
        <br/><br/>
        <div className={styles.signup}>
          <h2>Sign up for a steam key</h2>
          <form onSubmit={(e) => handleSubmit(e, email, username)}>
            <label>Email (same as Slack account)</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br/>
            <label>Slack Username</label>
            <input type="text" id="slack" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br/>
            <button type="submit" id="submit">Submit</button>
          </form>
        </div>
      </div>
      <SpeedInsights />
    </>
  );
}
