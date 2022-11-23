import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import MainFrame from '../components/MainFrame';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <MainFrame></MainFrame> */}
      <div className="flex justify-around">
        <SignUp></SignUp>
        <Login></Login>
      </div>
    </div>
  );
}
