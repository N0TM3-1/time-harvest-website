import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Time Harvest</title>
        <link rel="icon" href="favicon.png" type="image/x-icon"></link>
      </Head>
      <div>
        <h1>Time Harvest</h1>
        <h3>A game made by Dumi</h3>
        <p>Time Harvest is a game where you progress through different technologies while trying to become the best farmer there ever was</p>
        <p>You can find it here:</p>
        <ul>
          <li><a href="https://n0tm3123.itch.io/time-harvest"><button class="itch">Play it here</button></a></li>
          <li><a href="https://hackclub.slack.com/archives/C08B0TRLQMN"><button class="slack">Follow the game's development here</button></a></li>
        </ul>
      </div>
      <SpeedInsights />
    </>
  );
}
