import loading from  '../assets/Spin-1s-200px.gif'

const Loading=()=>{
    // const styles = StyleSheet.create({ container: { display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', }, logo: { width: 220, height: 300, marginTop: -50, }, });
    return(
        <view style={{ height:"100vh", display:"flex",justifyContent:"center",alignItems:"center",flex:"1"}}>
            
            <img src={loading} alt=""/>
        </view>
    );

}



export default Loading