import React, { useEffect } from "react";



export class ApiService {
    public getBaseUrl(): string {
      if(process.env.NEXT_PUBLIC_API_ENV == 'dev'){
         return "http://localhost/PW/index.php/";
      }else{
         return "https://pwwp.netiapps.com/";
      }
         
    }

    public getSiteUrl(): string {
      if(process.env.NEXT_PUBLIC_API_ENV == 'dev'){
         return "http://localhost:3000/";
      }else{
         return "https://pw.netiapps.com/";
      }
         
    }

    
}

