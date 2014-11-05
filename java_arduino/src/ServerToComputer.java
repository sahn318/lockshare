import java.awt.*;

import javax.swing.*;

import java.net.*;
import java.io.*;
import java.net.URLConnection;
import java.net.HttpURLConnection;
import java.net.URL;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Enumeration;


public class ServerToComputer{
    public static void main(String [] args) throws Exception
    {
        for(int access = 1; access >= 1; access++)
        {   
            Thread.sleep(1000);
            URL link = new URL("http://locksh.herokuapp.com/java");
            URLConnection con = null;
            con = link.openConnection();
            String line;
            int server = 0;
            BufferedReader br = new BufferedReader(new InputStreamReader(con.getInputStream()));
            try{
                while((line = br.readLine()) != null)
                {
                    server = Integer.parseInt(line);
                    server--;
                    
                    String timeStamp = new SimpleDateFormat("HH:mm:ss").format(Calendar.getInstance().getTime());

                    if(server == 1){
                    	System.out.println(timeStamp + ": " + "Door Unlocked");
                    }else{
                    	System.out.println(timeStamp + ": " + "Door Locked");
                    }
                }
            }catch(IOException e)
            {
                e.printStackTrace();
            }finally{
                if(br != null){
                    try{ 
                        br.close();
                    }catch(IOException e){
                        e.printStackTrace();
                    }
                }
            }
            
            if(access == 1000)
                access = 1;
        }        
           
           
    }
}