import React from 'react'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import houseImg from '../../images/house.jpg'
import raveImg from '../../images/rave.jpg'

import './styles.css'

export default function HousesList() {
   return (
      <div id="houses-container">
         <Navbar />
         <main>
            <div className="houses-list">
               <div className="house">
                  <img src={houseImg} alt="Casa de show" />
                  <div>
                     <h3>Mamus Club</h3>
                     <p>
                        casa de show top p krl, xama no dale que tu vai embrasar
                        de coquinha gelada
                     </p>
                  </div>
                  <div>
                     <sub>Funcionamento</sub>
                     <p>Qua - Dom</p>
                     <sub>Aberto</sub>
                     <p>18h - 4h</p>
                     <sub>Valor</sub>
                     <p>$$$</p>
                  </div>
               </div>
               <div className="house">
                  <img src={raveImg} alt="Casa de show" />
                  <div>
                     <h3>Grimland</h3>
                     <p>
                        Aqui voce vai usar tanta droga que vai dar um passeio de
                        mãos dadas com 6 gnomos amarelos.
                     </p>
                  </div>
                  <div>
                     <sub>Funcionamento</sub>
                     <p>Todos os dias.</p>
                     <sub>Aberto</sub>
                     <p>O dia todo.</p>
                     <sub>Valor</sub>
                     <p>$</p>
                  </div>
               </div>
               <div className="house">
                  <img src={raveImg} alt="Casa de show" />
                  <div>
                     <h3>Grimland</h3>
                     <p>
                        Aqui voce vai usar tanta droga que vai dar um passeio de
                        mãos dadas com 6 gnomos amarelos.
                     </p>
                  </div>
                  <div>
                     <sub>Funcionamento</sub>
                     <p>Todos os dias.</p>
                     <sub>Aberto</sub>
                     <p>O dia todo.</p>
                     <sub>Valor</sub>
                     <p>$</p>
                  </div>
               </div>
               <div className="house">
                  <img src={raveImg} alt="Casa de show" />
                  <div>
                     <h3>Grimland</h3>
                     <p>
                        Aqui voce vai usar tanta droga que vai dar um passeio de
                        mãos dadas com 6 gnomos amarelos.
                     </p>
                  </div>
                  <div>
                     <sub>Funcionamento</sub>
                     <p>Todos os dias.</p>
                     <sub>Aberto</sub>
                     <p>O dia todo.</p>
                     <sub>Valor</sub>
                     <p>$</p>
                  </div>
               </div>
               <div className="house">
                  <img src={raveImg} alt="Casa de show" />
                  <div>
                     <h3>Grimland</h3>
                     <p>
                        Aqui voce vai usar tanta droga que vai dar um passeio de
                        mãos dadas com 6 gnomos amarelos.
                     </p>
                  </div>
                  <div>
                     <sub>Funcionamento</sub>
                     <p>Todos os dias.</p>
                     <sub>Aberto</sub>
                     <p>O dia todo.</p>
                     <sub>Valor</sub>
                     <p>$</p>
                  </div>
               </div>
               <div className="house">
                  <img src={raveImg} alt="Casa de show" />
                  <div>
                     <h3>Grimland</h3>
                     <p>
                        Aqui voce vai usar tanta droga que vai dar um passeio de
                        mãos dadas com 6 gnomos amarelos.
                     </p>
                  </div>
                  <div>
                     <sub>Funcionamento</sub>
                     <p>Todos os dias.</p>
                     <sub>Aberto</sub>
                     <p>O dia todo.</p>
                     <sub>Valor</sub>
                     <p>$</p>
                  </div>
               </div>
            </div>
         </main>
         <Footer />
      </div>
   )
}
