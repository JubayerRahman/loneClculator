import React, {useState} from 'react'
import "./Calculator.css"

const Calculator = () => {
    const [summeryClass , setSummeryClass] = useState("summery")
    const [formClass , setformClass] = useState("loneForm")
    const [lone , setLone] = useState("")
    const [month , setMonth] = useState("")
    const [interest , setInterest] = useState("")
    const [monthlyPaind , setmonthlyPaind] = useState("")
    const [totalLone , settotalLone] = useState("")
    const [percent , setpercent] = useState("")
    const formFunction =(event)=>{
        event.preventDefault();
        
    }
    const getInterest =(e)=>{
        setInterest(e.target.value)
    }
    const calculateFunction = ()=>{
        if(lone==="" || month==="" || interest===""){
            alert("Give me all the numbers!!")
        }
        else{
            if(summeryClass==="summery"){
                setSummeryClass("showSummery")
            }
            if(formClass==="loneForm"){
                setformClass("hideloneForm")
            }
             setpercent ((lone*(interest))/100)
             setmonthlyPaind((((lone*(interest))/100)+parseFloat(lone))/month)
             settotalLone((((lone*(interest))/100)+parseFloat(lone))/month*parseFloat(month))
        }
    }
    const reCalculate =()=>{
        if(summeryClass==="showSummery"){
            setSummeryClass("summery")
        }
        if(formClass==="hideloneForm"){
            setformClass("loneForm")
        }
        setInterest('')
        setLone('')
        setMonth('')
        setmonthlyPaind('')
        settotalLone('')
        setpercent('')
        
    }
    const getLone =(e)=>{
        setLone(e.target.value)
    }
    const getMonth =(e)=>{
        setMonth(e.target.value)
    }
    const interest5 = ()=>{
        setInterest("5")
    }
    const interest10 = ()=>{
        setInterest("10")
    }
    const interest15 = ()=>{
        setInterest("15")
    }
  return (
    <div>
      <form onClick={formFunction} className={formClass}>
      <h1>Loan Canculator app</h1>
        <input type='number' placeholder='Enter Amount' min="0" value={lone} onChange={getLone}/>
        <input type='number' placeholder='Enter Month' min="0" value={month} onChange={getMonth}/>
        <h4 className='interestlable'>Interest rate:</h4>
        <div className='interest'>
            <button  className='interestbutton' onClick={interest5}>5%</button>
            <button className='interestbutton' onClick={interest10}>10%</button>
            <button className='interestbutton' onClick={interest15}>15%</button>
            <input  value={interest} onChange={getInterest} type='number' placeholder='Custom'/>
        </div>
        <button className='loneFormbutton' onClick={calculateFunction}>Claculate</button>
      </form>

      <div className={summeryClass}>
        <h2>Summery:</h2>
        <p>Hi, here is the complete summary of your loan situation. 
            You have taken a loan of amount <span>{lone}</span>  for <span>{interest}%</span> interest 
            and you have to complete the payment within the next <span>{month}</span> 
            months. So, in order to pay off the loan in time you 
            have to pay <span>{monthlyPaind}</span> per month. 
            In total you have to pay <span>{totalLone}</span></p>
            <div className="divider"></div>
        <button onClick={reCalculate}>Re-Calculate</button>
        <div className='socialLinks'>
        <button>
          <a href='https://www.facebook.com/15855jubayer' target='_blank' rel="noreferrer"> 
          <i class="fa-brands fa-facebook"></i></a>
        </button>
        <button>
            <a href='https://www.instagram.com/jubayerrahman8/' target='_blank' rel="noreferrer">
            <i class="fa-brands fa-instagram"></i>
            </a>
          </button>
        <button>
          <a href='https://twitter.com/jubayerr398' target='_blank' rel="noreferrer">
          <i class="fa-brands fa-twitter"></i>
          </a>
        </button>
        <button>
          <a href='https://sidemenuportfolio.netlify.app/' target='_blank' rel="noreferrer">
          <i class="fa-solid fa-globe"></i>
          </a>
        </button>
        </div>
      </div>
      <p className='Dev'>A small Project by <a href='https://sidemenuportfolio.netlify.app/' target='_blank' rel="noreferrer">Jobayer Rahman</a></p>
    </div>
  )
}

export default Calculator
