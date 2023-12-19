import React from "react";

function Footer() {
  return (
    <>
  
     <footer className="bg-black text-white py-8 flex justify-center">
        <div className="container  ">
            <div className="max-w-6xl mx-auto grid grid-rows-2 divide-y">
                <div className="grid grid-cols-12 ">
                    <div className="col-span-7">
                        <p>Firma Logo</p>
                    </div>
                    <div className="grid md:grid-cols-5 grid-cols-1 gap-2 col-span-5">
                        <a href="">Hjem</a>
                        <a href="">Kategorier</a>
                        <a href="">Udsalg</a>
                        <a href="">Om os</a>
                        <a href="">Kontakt os</a>
                    </div>
                </div>
                <div className="md:grid md:grid-cols-12 pt-4 grid-none md:flex-none flex flex-col">
                    <div className="md:col-span-9 col-span-4 flex gap-2 items-center">

                        <p className="">Copyright © 2023 CM Relations. All rights reserved.</p>
                        <p>|</p>
                        <a href="">Privatpolitik</a>
                        <a href="">Brugspolitik</a>
                    </div>
                    <div className="flex gap-2 items-end md:justify-end col-span-2">
                        <p>icon 1</p>
                        <p>icon 2</p>
                        <p>icon 3</p>
                    </div>
                </div>
            </div>
        </div>
     </footer>

     
    </>
  );
}

export default Footer;
