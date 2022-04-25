import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'


export default function Home({ token }) {
 
  return (
    
    
    
  
    <div class="bg-red-100 sm:h-screen ">
      
        <Navbar />
        <div class="flex flex-col justify-around  items-center space-y-6 pb-14">
        <h1 class="pt-6 text-3xl text-pink-600 flex flex-col justify-around  items-center font-mono">NBA Shirt FOR U</h1>
        
        <h1 class="text-2xl text-pink-500 font-mono">Wellcome To NBA Shirt Shop</h1>
        <h1 class="text-2xl text-pink-500 font-mono">This Web site for your who looking for a shirt from NBA star them choose what products that you want!</h1>
        <Image width="265" height="500"  src="/memes.jpeg"  >
          
        </Image>
   
        

    
        </div>  

        <footer class=" flex justify-center mt-4 bg-gradient-to-r from-purple-500 to-pink-500 p-5  ">
        <p class="text-indigo-100 text-2xl font-mono">
        Create by Sadsada Handloon
        </p>
        </footer>   


    </div>

  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}