// Icons
import { GiTacos, GiNachos } from 'react-icons/gi'
// Img
import nachos1 from '../assets/stickers/nacho1.png'
import nachos2 from '../assets/stickers/nachos2.png'
import nachos3 from '../assets/stickers/nachos3.png'
import nachos4 from '../assets/stickers/nachos4.png'
import taco2 from '../assets/stickers/taco2.png'
import taco3 from '../assets/stickers/taco3.png'
import trago1 from '../assets/stickers/trago1.png'
import trago2 from '../assets/stickers/trago2.png'

// Components
import { Order } from './Order';
// React 
import { useState } from 'react';
// Toast
import toast from 'react-hot-toast';

export const Carta = () => {
    const [ pastor, setPastor ] = useState(0);
    const [ cochinita, setCochinita ] = useState(0);
    const [ chorizo, setChorizo ] = useState(0);
    const [ carnitas, setCarnitas ] = useState(0);
    const [ cueritos, setCueritos ] = useState(0);
    const [ lengua, setLengua ] = useState(0);
    const [ birria, setBirria ] = useState(0);
    const [ res, setRes ] = useState(0);
    const [ birriaQuesadilla, setBirriaQuesadilla ] = useState(0);
    const [ gringa, setGringa ] = useState(0);
    const [ viggieGringa, setViggieGringa ] = useState(0);
    const [ nachos, setNachos ] = useState(0);
    const [ gringaGrande, setGringaGrande ] = useState(0);
    const [ champi, setchampi ] = useState(0);
    const [ alubias, setAlubias ] = useState(0);
    const [ totalOrder, setTotalOrder ] = useState(0);
    const [ location, setLocation ] = useState(null);
    const [ client, setClient ] = useState(null);

    const clearOrder = () => {
        setPastor(0);
        setCochinita(0);
        setChorizo(0);
        setCarnitas(0);
        setCueritos(0);
        setLengua(0);
        setBirria(0);
        setRes(0);
        setBirriaQuesadilla(0);
        setGringa(0);
        setViggieGringa(0);
        setNachos(0);
        setGringaGrande(0);
        setchampi(0);
        setAlubias(0);
        setTotalOrder(0);
    };

    const confirmOrder = () => {
        if(client !== null && client !== undefined) {
            if(location !== null && location !== undefined) {

                const list = [ 
                    { order: pastor, price: 5 },
                    { order: cochinita, price: 5 },
                    { order: chorizo, price: 5 },
                    { order: carnitas, price: 5 },
                    { order: cueritos, price: 5 },
                    { order: lengua, price: 5 },
                    { order: birria, price: 6 },
                    { order: res, price: 6 },
                    { order: birriaQuesadilla, price: 3.50 },
                    { order: gringa, price: 3.50 },
                    { order: viggieGringa, price: 3.50 },
                    { order: nachos, price: 10 },
                    { order: gringaGrande, price: 5.50 },
                    { order: champi, price: 5 },
                    { order: alubias, price: 5 },
                ]
        
                let total = 0;
        
                list.forEach(item => {
                    if(item.order > 0) {
                        total = total + (item.order * item.price);
                    }
                });
        
                setTotalOrder(total)
            } else {
                toast.error('Debe seleccionar una locacion de pedido.') 
            }
        } else {
            toast.error('Debe ingresar su nombre para continuar.')
        }
    };

    return(
        <div className='carta'>
            <div className='img_box box-1'>
                <div className='imagenes'><img src={nachos1} alt="img" /></div>
                <div className='imagenes'><img src={taco3} alt="img" /></div>
                <div className='imagenes'><img src={nachos3} alt="img" /></div>
                <div className='imagenes'><img src={trago2} alt="img" /></div>
            </div>

            <div className="cartaBox">
                <div>
                    <div>
                        <h1>TACOS</h1>
                        <h2>2 TACOS IGUALES POR ORDEN</h2>
                    </div>

                    <div>
                        <h3>CERDO</h3>
                        <div>
                            <div>
                                <div className="flex">
                                    <h4><GiTacos className="tacoIcon"/>PASTOR</h4>
                                    <div>
                                        <h4>5€</h4>
                                        <Order type={pastor} setType={setPastor} />
                                    </div>
                                </div>

                                <div>
                                    <p>Carne adobada con piña y cebolla</p>
                                </div>
                            </div>

                            <div>
                                <div className="flex">
                                    <h4><GiTacos className="tacoIcon"/>COCHINITA</h4>
                                    <div>
                                        <h4>5€</h4>
                                        <Order type={cochinita} setType={setCochinita} />
                                    </div>
                                </div>

                                <div>
                                    <p>Carne desmechada con una salsa de chile guajillo</p>
                                </div>
                            </div>

                            <div>
                                <div className="flex">
                                    <h4><GiTacos className="tacoIcon"/>CHORIZO</h4>
                                    <div>
                                        <h4>5€</h4>
                                        <Order type={chorizo} setType={setChorizo} />
                                    </div>
                                </div>

                                <div>
                                    <p>Carne picada marinada en adobo</p>
                                </div>
                            </div>

                            <div>
                                <div className="flex">
                                    <h4><GiTacos className="tacoIcon"/>CARNITAS</h4>
                                    <div>
                                        <h4>5€</h4>
                                        <Order type={carnitas} setType={setCarnitas} />
                                    </div>
                                </div>

                                <div className="flex">
                                    <h4><GiTacos className="tacoIcon"/>CUERITOS</h4>
                                    <div>
                                        <h4>5€</h4>
                                        <Order type={cueritos} setType={setCueritos} />
                                    </div>
                                </div>

                                <div className="flex">
                                    <h4><GiTacos className="tacoIcon"/>LENGUA</h4>
                                    <div>
                                        <h4>5€</h4>
                                        <Order type={lengua} setType={setLengua} />
                                    </div>
                                </div>

                                <div>
                                    <p>Carnes cocinadas en su propia grasa</p>
                                </div>
                            </div>
                        </div>

                        <h3>VACUNO</h3>
                        <div>
                            <div>
                                <div className="flex">
                                    <h4><GiTacos className="tacoIcon"/>BIRRIA</h4>
                                    <div>
                                        <h4>6€</h4>
                                        <Order type={birria} setType={setBirria} />
                                    </div>
                                </div>

                                <div>
                                    <p>Carne a base de chiles y su propio jugo</p>
                                </div>
                            </div>

                            <div>
                                <div className="flex">
                                    <h4><GiTacos className="tacoIcon"/>RES</h4>
                                    <div>
                                        <h4>6€</h4>
                                        <Order type={res} setType={setRes} />
                                    </div>
                                </div>

                                <div>
                                    <p>Carne marinada con ajo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <div>
                            <h1>QUESADILLAS</h1>
                            <h2>1 QUESADILLA POR ORDEN</h2>
                        </div>

                        <div>
                            <div>
                                <div className="flex">
                                    <h4><GiTacos className="tacoIcon"/>BIRRIA QUESADILLA</h4>
                                    <div>
                                        <h4>3.5€</h4>
                                        <Order type={birriaQuesadilla} setType={setBirriaQuesadilla} />
                                    </div>
                                </div>

                                <div>
                                    <p>Carne de birria con queso</p>
                                </div>
                            </div>

                            <div>
                                <div className="flex">
                                    <h4><GiTacos className="tacoIcon"/>GRINGA</h4>
                                    <div>
                                        <h4>3.5€</h4>
                                        <Order type={gringa} setType={setGringa} />
                                    </div>
                                </div>

                                <div>
                                    <p>Carne de pastor con queso</p>
                                </div>
                            </div>

                            <div>
                                <div className="flex">
                                    <h4><GiTacos className="tacoIcon"/>VEGGIE GRINGA</h4>
                                    <div>
                                        <h4>3.5€</h4>
                                        <Order type={viggieGringa} setType={setViggieGringa} />
                                    </div>
                                </div>

                                <div>
                                    <p>Champiñones al pastor con queso</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h1>OTROS</h1>
                        </div>

                        <div>
                            <div>
                                <div className="flex">
                                    <h4><GiNachos className="tacoIcon"/>NACHOS</h4>
                                    <div>
                                        <h4>10€</h4>
                                        <Order type={nachos} setType={setNachos} />
                                    </div>
                                </div>

                                <div>
                                    <p>Carne picada, queso cheddar, pico de gallo y guacamole</p>
                                </div>
                            </div>

                            <div>
                                <div className="flex">
                                    <h4><GiTacos className="tacoIcon"/>GRINGA GRANDE</h4>
                                    <div>
                                        <h4>5.5€</h4>
                                        <Order type={gringaGrande} setType={setGringaGrande} />
                                    </div>
                                </div>

                                <div>
                                    <p>Gringa de doble tamaño</p>
                                </div>
                            </div>

                            <h3>TACOS VEGETARIANOS</h3>

                            <div>
                                <div className="flex">
                                    <h4><GiTacos className="tacoIcon"/>CHAMPIÑONES</h4>
                                    <div>
                                        <h4>5€</h4>
                                        <Order type={champi} setType={setchampi} />
                                    </div>
                                </div>

                                <div>
                                    <p>Con salsa de pastor o cochinita</p>
                                </div>
                            </div>

                            <div>
                                <div className="flex">
                                    <h4><GiTacos className="tacoIcon"/>ALUBIAS</h4>
                                    <div>
                                        <h4>5€</h4>
                                        <Order type={alubias} setType={setAlubias} />
                                    </div>
                                </div>

                                <div>
                                    <p>Tomate, cilantro y cebolla</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='img_box box-2'>
                <div className='imagenes'><img src={nachos2} alt="img" /></div>
                <div className='imagenes'><img src={taco2} alt="img" /></div>
                <div className='imagenes'><img src={trago1} alt="img" /></div>
                <div className='imagenes'><img src={nachos4} alt="img" /></div>
            </div>

            <div className='client_data'>
                <label>Indique su Nombre</label>
                <input type="text" name='name' onChange={(e) => setClient(e.target.value)}/>

                <label>De donde esta realizando el pedido?</label>
                <select name="location" defaultValue="default" onChange={(e) => setLocation(e.target.value)}>
                    <option value="default" disabled="disabled">Seleccione</option>
                    <option value="Local La comadre">Local-La comadre</option>
                    <option value="Tertulia">Tertulia</option>
                </select>

                <div className='btn_clear'>
                        <button onClick={confirmOrder}>Confirmar</button>
                        <button onClick={clearOrder}>Borrar todo</button>
                </div>
            </div>

            { totalOrder > 0 &&
            <div className='order_total'>
                <h2>Su pedido</h2>

                <div className='total'>
                    <div>
                        <ul>
                            {pastor > 0 && <li><div><GiTacos className="tacoIcon"/>PASTOR</div> <span>{pastor}</span></li>}
                            {cochinita > 0 && <li><div><GiTacos className="tacoIcon"/>COCHINITA</div> <span>{cochinita}</span></li>}
                            {chorizo > 0 && <li><div><GiTacos className="tacoIcon"/>CHORIZO</div> <span>{chorizo}</span></li>}
                            {carnitas > 0 && <li><div><GiTacos className="tacoIcon"/>CARNITAS</div> <span>{carnitas}</span></li>}
                            {cueritos > 0 && <li><div><GiTacos className="tacoIcon"/>CUERITOS</div> <span>{cueritos}</span></li>}
                            {lengua > 0 && <li><div><GiTacos className="tacoIcon"/>LENGUA</div> <span>{lengua}</span></li>}
                            {birria > 0 && <li><div><GiTacos className="tacoIcon"/>BIRRIA</div> <span>{birria}</span></li>}
                            {res > 0 && <li><div><GiTacos className="tacoIcon"/>RES</div> <span>{res}</span></li>}
                            {birriaQuesadilla > 0 && <li><div><GiTacos className="tacoIcon"/>BIRRIA QUESADILLA</div> <span>{birriaQuesadilla}</span></li>}
                            {gringa > 0 && <li><div><GiTacos className="tacoIcon"/>GRINGA</div> <span>{gringa}</span></li>}
                            {viggieGringa > 0 && <li><div><GiTacos className="tacoIcon"/>VEGGIE GRINGA</div> <span>{viggieGringa}</span></li>}
                            {nachos > 0 && <li><div><GiNachos className="tacoIcon"/>NACHOS</div> <span>{nachos}</span></li>}
                            {gringa > 0 && <li><div><GiTacos className="tacoIcon"/>GRINGA GRANDE</div> <span>{gringa}</span></li>}
                            {champi > 0 && <li><div><GiTacos className="tacoIcon"/>CHAMPIÑONES</div> <span>{champi}</span></li>}
                            {alubias > 0 && <li><div><GiTacos className="tacoIcon"/>ALUBIAS</div> <span>{alubias}</span></li>}
                        </ul>
                    </div>

                    <div>
                        <h3>Total</h3>
                        <h4>{totalOrder}€</h4>

                        <a 
                        href={`https://wa.me/34664558840?text=Hola,%20mi%20nombre%20es%20${client}.Estoy%20realizando%20mi%20pedido%20desde%20${location},%20quisiera%20lo%20siguiente%20:${pastor > 0 ? '%20-%20PASTOR(' + pastor + ')' : ''}${cochinita > 0 ? '%20-%20COCHINITA(' + cochinita + ')' : ''}${chorizo > 0 ? '%20-%20CHORIZO(' + chorizo + ')' : ''}${carnitas > 0 ? '%20-%20CARNITAS(' + carnitas + ')' : ''}${cueritos > 0 ? '%20-%20CUERITOS(' + cueritos + ')': ''}${lengua > 0 ? '%20-%20LENGUA(' + lengua + ')' : ''}${birria > 0 ? '%20-%20BIRRIA(' + birria + ')' : ''}${res > 0 ? '%20-%20RES(' + res + ')' : ''}${birriaQuesadilla > 0 ? '%20-%20BIRRIA QUESADILLA(' + birriaQuesadilla + ')' : ''}${gringa > 0 ? '%20-%20GRINGA(' + gringa + ')' : ''}${viggieGringa > 0 ? '%20-%20VEGGIE GRINGA(' + viggieGringa + ')' : ''}${nachos > 0 ? '%20-%20NACHOS(' + nachos + ')' : ''}${gringa > 0 ? '%20-%20GRINGA GRANDE(' + gringa + ')' : ''}${champi > 0 ? '%20-%20CHAMPIÑONES(' + champi + ')' : ''}${alubias > 0 ? '%20-%20ALUBIAS(' + alubias + ')' : ''}`}
                        target='_blank' 
                        rel='noopener noreferrer'
                        >
                            Hacer pedido
                        </a>
                    </div>
                </div>
            </div>
            }
        </div>
    );
}