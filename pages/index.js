import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/banner";
import Image from "next/image";

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("banner button click");
  };
  return (
    <>
      <Head>
        <title>Coffe connoisseur</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Banner
          buttonText='View near stores!'
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image
            src='/static/hero-image.png'
            width={700}
            height={400}
            alt='hero-img'
          />
        </div>
      </main>
    </>
  );
}
