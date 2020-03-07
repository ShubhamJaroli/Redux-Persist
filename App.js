import React, { Component } from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import {connect} from 'react-redux'
import {increase,decrease,same} from './app/actions'
import Login from './app/components/login'
var b = 23,c;
class Demo extends Component
{
  constructor()
  {
    super()
    this.state=
    {
      count:b.count
    }
  }
  render()
  {
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=>{c(increase()); this.setState({count:b.count})}}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
          <Text style={styles.data}>{this.state.count}</Text>
        <TouchableOpacity style={styles.button} onPress={()=>{c(decrease()); this.setState({count:b.count})}}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.msg} onPress={()=>this.props.navigation.navigate('Login')}>Login Page</Text>
      </View>
    )
  }
}

const MainNavigator = createStackNavigator(
  {
    home:Demo,
    Login:Login
  }
)
const App = createAppContainer(MainNavigator)
const styles = StyleSheet.create(
  {
    container:
    {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      backgroundColor:'#4b4b4b'
    },
    button:
    {
      height:60,
      width:60,
      margin:20,
      backgroundColor:'#1e90ff',
      justifyContent:'center',
      alignItems:'center'
    },
    buttonText:
    {
      fontSize:40,
      color:'snow'
    },
    data:
    {
      fontSize:40,
      color:'snow'
    },
    msg:
    {
      position:'absolute',
      bottom:'5%',
      color:'snow',
      alignSelf:'center',
      fontSize:20
    }
  }
)
const mapStateToProps=(state)=>
{
  console.log("States",state)
  b = state.Reducer;
  console.log("B",b)
  return(
    {}
  )
}
const mapDispatchToProps=(dispatch)=>
{
  console.log(dispatch(same()));
  c = dispatch
  return(
    {

    }
  )
}
export default connect(mapStateToProps,mapDispatchToProps)(App)