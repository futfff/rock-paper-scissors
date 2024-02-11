import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { AuthStore } from "@/store/authStore";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const user = AuthStore((state) => state.user);
  const logout = AuthStore((state) => state.logout)
  return (
    <div>
      {user ? (
        <div>
          <p> вы авторизованы : {user.name} </p>
          <button onClick={() => logout()}>logout</button>
        </div>
      ) : (
        <div>вы не авторизованы</div>
      )}
    </div>
  );
}
