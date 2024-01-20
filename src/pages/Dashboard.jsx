import React from 'react'
import Navbar2 from '../components/Navbar2'
import Upload from '../components/Upload'
import Footer from '../layout/Footer'
import WalletIDMainContext from '../context/walletID/WalletIDMainContext'
import { useContext } from 'react'
import NFTInfo from '../components/NftInfo'
import PendingRights from '../components/PendingRights'
export const Dashboard = () => {
  const { fetchedWalletAddress } = useContext(WalletIDMainContext)
  return (
    <div className='bg-black'>
      <Navbar2 value={fetchedWalletAddress} />
      <PendingRights />
      <NFTInfo />
      <Upload />
      <Footer />
    </div>
  )
}
