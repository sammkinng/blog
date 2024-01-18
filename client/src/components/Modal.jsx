

const Modal=({
    heading,
    height=168,
    width=268,
    btn1,
    btn2,
    onClick1=()=>{},
    onClick2=()=>{}
})=>{
    return <div style={{width: '100%', height: '100%', background: 'rgba(0, 0,128, 0.4)', flexDirection: 'column',backdropFilter: 'blur(1px)',  justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
    <div style={{height,width, padding: 24, background: 'white', boxShadow: '0px 8px 8px -4px rgba(16, 24, 40, 0.03)', borderRadius: 12, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 32, display: 'flex'}}>
         <p style={{fontSize: 24, fontFamily: 'Inter', fontWeight: '600'}}>{heading}</p>
       
        <div  style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
        {btn1 &&  <div style={{flex: '1 1 0', height: 44, borderRadius: 8, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}} onClick={onClick1}>
                <div style={{flex: '1 1 0', height: 44, paddingLeft: 18, paddingRight: 18, paddingTop: 10, paddingBottom: 10, background: 'white', boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)', borderRadius: 8, overflow: 'hidden', border: '1px #D0D5DD solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
                    <div style={{color: '#344054', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', lineHeight: 24, wordWrap: 'break-word'}}>{btn1}</div>
                </div>
            </div>}{btn2 &&
            <div style={{flex: '1 1 0', height: 44, borderRadius: 8, justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}} onClick={onClick2}>
                <div style={{flex: '1 1 0', height: 44, paddingLeft: 18, paddingRight: 18, paddingTop: 10, paddingBottom: 10, background: '#7F56D9', boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)', borderRadius: 8, overflow: 'hidden', border: '1px #7F56D9 solid', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
                    <div style={{color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', lineHeight: 24, wordWrap: 'break-word'}}>{btn2}</div>
                </div>
            </div>}
        </div>
    </div>
</div>
}

export default Modal