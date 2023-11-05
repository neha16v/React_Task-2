import React, { useContext } from 'react';
import logo from '../images/logo.png'
import home from '../images/home.png'
import search from '../images/search.png'
import notes from '../images/notes.png'
import taskk from '../images/task_alt.png'
import archive from '../images/archive.png'
import deletee from '../images/delete.png'
import edit from '../images/edit.png'
import grade from '../images/grade.png'
import { useNavigate } from 'react-router-dom';
import { myContext } from '../App';

const Homepage = ({isadd ,setIsadd}) => {
    const { title, setTitle, desc, setDesc, list, setList, titlee, setTitlee, task, setTask, listt, setListt } = useContext(myContext)
    const nav = useNavigate()
    return (
        <div className='d-flex' style={{ overflow: "hidden" }}>
            <div>
                <div className='d-flex fw-semibold fs-5' style={{ padding: "30px" }}>
                    <div><img src={logo}></img></div>
                    <div style={{ paddingLeft: "15px" }}>
                        <div>John Doe</div>
                        <div>johndoe@gmail.com</div>
                    </div>
                </div>
                <div className='d-flex fw-semibold fs-5' style={{ position: "relative", backgroundColor: "rgb(49, 33, 138)", height: "55px", left: '30px', paddingLeft: "18px", paddingTop: "10px", paddingBottom: "30px", border: "2px solid rgb(49, 33, 138)", width: "300px", borderRadius: "7px" }} >
                    <div><img src={home}></img></div>
                    <div style={{ paddingLeft: "15px", paddingTop: "3px", color: "white" }}>Home</div>
                </div>
                <div className='d-flex fw-semibold fs-5' style={{ paddingLeft: '45px', paddingTop: "20px", paddingBottom: "20px" }} >
                    <div><img src={search}></img></div>
                    <div style={{ paddingLeft: "10px", paddingTop: "3px" }}>Search</div>
                </div>
                <div className='d-flex fw-semibold fs-5' style={{ paddingLeft: '45px', paddingTop: "10px", paddingBottom: "20px" }} onClick={() => nav("/notespage")}>
                    <div><img src={notes}></img></div>
                    <div style={{ paddingLeft: "10px", paddingTop: "3px" }}>Notes</div>
                </div>
                <div className='d-flex fw-semibold fs-5' style={{ paddingLeft: '47px', paddingTop: "10px", paddingBottom: "20px" }} onClick={() => nav("/taskpage")}>
                    <div><img src={taskk}></img></div>
                    <div style={{ paddingLeft: "15px", paddingTop: "3px" }}>Tasks</div>
                </div>
                <div className='d-flex fw-semibold fs-5' style={{ paddingLeft: '49px', paddingTop: "10px", paddingBottom: "20px" }} >
                    <div><img src={archive}></img></div>
                    <div style={{ paddingLeft: "15px", paddingTop: "3px" }}>Archive</div>
                </div>
                <div className='d-flex fw-semibold fs-5' style={{ paddingLeft: '50px', paddingTop: "10px", paddingBottom: "20px" }} >
                    <div><img src={deletee}></img></div>
                    <div style={{ paddingLeft: "15px", paddingTop: "3px" }}>Bin</div>
                </div>
            </div>
            <div style={{ width: "100%", height: '1000px', backgroundColor: 'rgb(174, 210, 255)' }}>
                <div className='fw-semibold fs-5' style={{ padding: "25px" }}>Welcome John</div>
                <div className='d-flex fw-semibold fs-5' style={{ paddingLeft: "20px" }}>
                    <div><img src={notes}></img></div>
                    <div style={{ paddingLeft: "10px" }}>My Notes</div>
                </div>
                <div className='fw-semibold ' style={{ paddingLeft: "20px", paddingTop: "15px", paddingBottom: "15px" }}>Recently viewed</div>
                <div className='d-flex' style={{ gap: "15px" }}>
                    {list.map((a, index) => (
                        <div key={index} style={{ backgroundColor: "white", width: "250px", position: "relative", left: "20px", height: "200px", borderRadius: '7px' }}>
                            <div className='d-flex' style={{ padding: "20px" }} >
                                <div className='fw-semibold' >{a.title}</div>
                                <div style={{ paddingLeft: '100px' }}><img src={edit}></img></div>
                                <div style={{ paddingLeft: '10px' }}><img src={deletee}></img></div>
                            </div>
                            <div style={{ paddingLeft: "20px", width: "295px" }}>{a.desc}</div>
                            <div style={{ paddingLeft: "20px" }}>5 days ago</div>
                        </div>
                    ))}
                </div>

                <div className='d-flex fw-semibold fs-5' style={{ padding: "20px" }}>
                    <div><img src={task}></img></div>
                    <div style={{ paddingLeft: "10px" }}>My Tasks</div>
                </div>
                <div style={{ backgroundColor: "white", position: "relative", left: "20px", width: "95%", height: "500px", borderRadius: '7px' }}>
                    {listt.map((a, index) => (
                        <div style={{ border: "1px solid black", borderRadius: "7px", width: "1050px", padding: "20px", backgroundColor: "white", position: "relative", left: "20px", top: "20px", height: "100px", marginBottom: "20px" }}>
                            <div className='d-flex'>
                                <div style={{ paddingTop: "10px" }}><img src={taskk}></img></div>
                                <div style={{ paddingLeft: "10px" }}>
                                    <div className='fw-semibold fs-5'>{a.titlee}</div>
                                    <div className='fw-semibold'>{a.task}</div>
                                </div>
                                <div style={{ paddingTop: "10px", paddingLeft: "800px" }}><img src={grade}></img></div>
                            </div>
                        </div>
                    ))}
                    {/* <div style={{ border: "1px solid black", borderRadius: "7px", width: "1050px", padding: "20px", backgroundColor: "white", position: "relative", left: "20px", top: "20px", height: "100px", marginBottom: "20px" }}>
                        <div className='d-flex'>
                            <div style={{ paddingTop: "10px" }}><img src={circle}></img></div>
                            <div style={{ paddingLeft: "10px" }}>
                                <div className='fw-semibold fs-5'>System update</div>
                                <div className='fw-semibold'>5 days left</div>
                            </div>
                            <div style={{ paddingTop: "10px", paddingLeft: "766px" }}><img src={grade}></img></div>
                        </div>
                    </div> */}
                    {/* <div style={{ border: "1px solid black", borderRadius: "7px", width: "1050px", padding: "20px", backgroundColor: "white", position: "relative", left: "20px", top: "20px", height: "100px", marginBottom: "20px" }}>
                        <div className='d-flex'>
                            <div style={{ paddingTop: "10px" }}><img src={circle}></img></div>
                            <div style={{ paddingLeft: "10px" }}>
                                <div className='fw-semibold fs-5'>Quality check</div>
                                <div className='fw-semibold'>10 days left</div>
                            </div>
                            <div style={{ paddingTop: "10px", paddingLeft: "780px" }}><img src={star}></img></div>
                        </div>
                    </div> */}
                    {/* <div style={{ border: "1px solid black", borderRadius: "7px", width: "1050px", padding: "20px", backgroundColor: "white", position: "relative", left: "20px", top: "20px", height: "100px", marginBottom: "20px" }}>
                        <div className='d-flex'>
                            <div style={{ paddingTop: "10px" }}><img src={circle}></img></div>
                            <div style={{ paddingLeft: "10px" }}>
                                <div className='fw-semibold fs-5'>Charger change</div>
                                <div className='fw-semibold'>12 days left</div>
                            </div>
                            <div style={{ paddingTop: "10px", paddingLeft: "756px" }}><img src={star}></img></div>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default Homepage;