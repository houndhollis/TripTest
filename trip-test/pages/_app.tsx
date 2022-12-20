import { Global } from '@emotion/react'
import { global } from '../styles/globals'
import type { AppProps } from 'next/app'
import Script from 'next/script'

declare global { // Kakao 함수를 전역에서 사용할 수 있도록 선언
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  function kakaoInit () {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
  }
  
  return (
  <>
    <Global styles={global}/>
    <Script
      src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js" 
      integrity="sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx" 
      crossOrigin="anonymous"
      onLoad={kakaoInit}>
    </Script>
    <Component {...pageProps} />
  </>
  )
}


