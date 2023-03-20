import Button from '@/components/inputs/button/Button';
import NumberField from '@/components/inputs/numberField/NumberField';
import RadioGroup from '@/components/inputs/radio/RadioGroup';
import TextField from '@/components/inputs/textField/TextField';

import Head from 'next/head';
import { useState } from 'react';
import { RxCaretRight } from 'react-icons/rx';

const items = [
  { id: '1', value: '1', label: 'e-Money' },
  { id: '2', value: '2', label: 'two' },
  { id: '3', value: '3', label: 'three' },
];

export default function Home() {
  const [name, setName] = useState('');
  const [selectedRadio, setSelectedRadio] = useState('');
  const [number, setNumber] = useState(1);

  return (
    <>
      <Head>
        <title>Audiophile</title>
        <meta name="description" content="Audio Gear Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            width: 200,
          }}
        >
          <NumberField
            value={number}
            handleChangeEvent={(e) => setNumber(parseInt(e.target.value) || 0)}
            handleDecrement={() => setNumber((prevNumber) => prevNumber - 1)}
            handleIncrement={() => setNumber((prevNumber) => prevNumber + 1)}
          />
          <RadioGroup
            groupName="testing"
            items={items}
            selected={selectedRadio}
            handleChangeEvent={(e) => setSelectedRadio(e.target.value)}
          />
          <TextField
            value={name}
            handleChangeEvent={(e) => setName(e.target.value)}
            name="name"
            label="Name"
            placeholder="Insert your name"
            error={''}
          />
          <Button
            variant="primary"
            handleClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              console.log(e);
            }}
          >
            <span className="flexCenter">See Product</span>
          </Button>
          <Button
            variant="secondary"
            handleClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              console.log(e);
            }}
          >
            <span className="flexCenter">See Product</span>
          </Button>
          <Button
            variant="flat"
            handleClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              console.log(e);
            }}
          >
            <span className="flexCenter">
              Shop <RxCaretRight className="textPrimary" />
            </span>
          </Button>
        </div>
        <h1>Hello World</h1>
        <h2>Hello World</h2>
        <h3>Hello World</h3>
        <h4>Hello World</h4>
        <h5>Hello World</h5>
        <h6>Hello World</h6>
        <p>Hello World</p>
        <div className="overline">Hello World</div>
        <div className="subtitle">Hello World</div>
        <hr />
        <div>
          Home Headphones Speakers Earphones New product XX99 Mark II Headphones
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast. See product Headphones Shop
          Speakers Shop Earphones Shop ZX9 speaker Upgrade to premium speakers
          that are phenomenally built to deliver truly remarkable sound. See
          product ZX7 speaker See product YX1 earphones See product Bringing you
          the best audio gear Located at the heart of New York City, Audiophile
          is the premier store for high end headphones, earphones, speakers, and
          audio accessories. We have a large showroom and luxury demonstration
          rooms available for you to browse and experience a wide range of our
          products. Stop by our store to meet some of the fantastic people who
          make Audiophile the best place to buy your portable audio equipment.
          Home Headphones Speakers Earphones Audiophile is an all in one stop to
          fulfill your audio needs. We&apos;re a small team of music lovers and
          sound specialists who are devoted to helping you get the most out of
          personal audio. Come and visit our demo facility - we&apos;re open 7
          days a week. Copyright 2021. All Rights Reserved
        </div>
      </div>
    </>
  );
}
