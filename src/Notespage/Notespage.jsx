import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png'
import home from '../images/color_home.png'
import search from '../images/search.png'
import notes from '../images/white_notes.png'
import notess from '../images/notes.png'
import task from '../images/task_alt.png'
import archive from '../images/archive.png'
import deletee from '../images/delete.png'
import close from '../images/close.png'
import edit from '../images/edit.png'
import clock from '../images/logoclock.png'
import text from '../images/text.png'
import color from '../images/color.png'
import lists from '../images/list.png'
import text_color from '../images/text_color.png'
import left_align from '../images/left_align.png'
import left_undo from '../images/left_undo.png'
import right_undo from '../images/right_undo.png'
import { useNavigate } from 'react-router-dom';

const getlocal = () => {
    let lst = localStorage.getItem("list")
    if (lst) {
        return JSON.parse(localStorage.getItem("list"))
    }
    else {
        return []
    }
}
const Notespage = ({isadd ,setIsadd}) => {
    const nav=useNavigate()
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [list, setList] = useState(getlocal());
    const [editindex, setEditindex] = useState(null)
    const [show, setShow] = useState(false)
    const submit = (e) => {
        e.preventDefault();
        const data = { title, desc };
        if (title && desc) {
            setList((ls) => [...ls, data]);
            setTitle("");
            setDesc("");
        }
        setIsadd(!isadd)
        console.log("add");
    }
    const update = () => {
        list.splice(editindex,1, {title, desc})
        setList([...list])
        setShow(false)
        setTitle("")
        setDesc("")
    }
    const deeletee = (index) => {
        list.splice(index, 1)
        setList([...list])
    }
    const editt = (index) => {
        setTitle(list[index].title)
        setDesc(list[index].desc)
        setShow(!false)
        setEditindex(index)
    }
    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list))
    }, [list])
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
                <div className='d-flex fw-semibold fs-5' style={{ position: "relative", height: "55px", left: '30px', paddingLeft: "14px", paddingTop: "10px", paddingBottom: "30px", width: "300px", borderRadius: "7px" }} onClick={()=>nav("/")} >
                    <div><img src={home}></img></div>
                    <div style={{ paddingLeft: "13px", paddingTop: "3px" }}>Home</div>
                </div>
                <div className='d-flex fw-semibold fs-5' style={{ paddingLeft: '45px', paddingTop: "20px", paddingBottom: "20px" }} >
                    <div><img src={search}></img></div>
                    <div style={{ paddingLeft: "10px", paddingTop: "3px" }}>Search</div>
                </div>
                <div className='d-flex fw-semibold fs-5' style={{ position: "relative", backgroundColor: "rgb(49, 33, 138)", height: "55px", left: '30px', paddingLeft: "15px", paddingTop: "10px", paddingBottom: "30px", border: "2px solid rgb(49, 33, 138)", width: "300px", borderRadius: "7px" }}>
                    <div><img src={notes}></img></div>
                    <div style={{ paddingLeft: "13px", paddingTop: "3px", color: "white" }}>Notes</div>
                </div>
                <div className='d-flex fw-semibold fs-5' style={{ paddingLeft: '47px', paddingTop: "20px", paddingBottom: "20px" }} onClick={()=>nav("/taskpage")}>
                    <div><img src={task}></img></div>
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
            <div style={{ backgroundColor: "rgb(174, 210, 255)", width: "100%", height: "1000px" }}>
                <div style={{ backgroundColor: "white", position: "relative", left: "20px", top: "40px", width: "95%", height: "450px", borderRadius: "10px" }}>
                    <form onSubmit={submit}>
                        <div className='d-flex fw-semibold fs-5' style={{ padding: "35px" }}>
                            {!show?<div><button className='fw-semibold fs-5' style={{ backgroundColor: "white", border: "0px" }} type='submit'>Add a note</button></div>:null}
                            {!show?null:<div><button className='fw-semibold fs-5' style={{ backgroundColor: "white", border: "0px" }} type='submit' onClick={update}>Update</button></div>}
                            <div style={{ paddingLeft: "900px" }}><img src={close}></img></div>
                        </div>
                        <div style={{ paddingLeft: "40px" }}>
                            <div style={{ marginBottom: "30px" }}>
                                <input style={{ border: "0px" }} type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
                            </div>
                            <div>
                                <input style={{ border: "0px", width: "90%", height: "100px" }} type="text" name="desc" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='Take a note...' />
                            </div>
                        </div>
                    </form>
                    <div className='d-flex' style={{ paddingLeft: "35px", backgroundColor: "rgb(174, 210, 255)", borderRadius: "20px", padding: "10px", position: "relative", left: "40px", width: "200px", top: "20px" }}>
                        <div><img src={clock}></img></div>
                        <div className='fw-semibold' style={{ paddingTop: "5px", paddingLeft: "10px" }}>Today,10.10 AM</div>
                    </div>
                    <div className='d-flex' style={{ position: 'relative', top: "50px", left: "40px" }}>
                        <div><img src={text}></img></div>
                        <div style={{ left: "20px", position: "relative" }} ><img src={color}></img></div>
                        <div style={{ left: "40px", position: "relative" }}><img src={lists}></img></div>
                        <div style={{ left: "60px", position: "relative" }}><img src={text_color}></img></div>
                        <div style={{ left: "80px", position: "relative" }}><img src={left_align}></img></div>
                        <div style={{ left: "100px", position: "relative" }}><img src={left_undo}></img></div>
                        <div style={{ left: "120px", position: "relative" }}><img src={right_undo}></img></div>
                    </div>
                    <div style={{ position: "relative", top: "130px" }} className='d-flex'>
                        <div><img src={notess}></img></div>
                        <div className='fw-semibold fs-5' style={{ paddingLeft: "10px" }}>My Notes</div>
                    </div>
                    <div className='fw-semibold' style={{ position: "relative", top: "150px" }}>Recently viewed</div>
                    <div style={{display:"flex", gap:'15px'}}>
                        {list.map((a, index) => (
                            <div key={index} style={{ position: 'relative', top: "180px", backgroundColor: "white", width: "250px", height: "200px", padding: "20px", borderRadius: "10px" }} >
                                <div className='d-flex'>
                                    <div>{a.title}</div>
                                    <button onClick={()=>editt(index)} style={{ paddingLeft: "110px", border:'0px', backgroundColor:"white" }}><img src={edit}></img></button>
                                    <button  onClick={()=>deeletee(index)} style={{ paddingLeft: "10px" , border:'0px', backgroundColor:"white" }}><img src={deletee}></img></button>
                                </div>
                                <div>{a.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notespage;