import React,{Component} from 'react';
import {StyleSheet,View,Text,TextInput,TouchableOpacity} from 'react-native';
import {createSwitchNavigator} from 'react-navigation';
import {connect} from 'react-redux'
import {add,reset} from '../../action2'
var b,c
class Demo extends Component
{
  constructor()
  {
      super()
      this.state=
      {
          fname:b.FirstName,
          lname:b.LastName,
          contact:b.Contact,
          email:b.Email
      }
  }
  save=()=>
  {
      var fn = this.state.fname;
      var ln = this.state.lname;
      var co  = this.state.contact;
      var e = this.state.email;
      if(fn==""||ln==""||co==""||e=="")
        alert("All Field is required");
      else if(isNaN(parseInt(co))||parseInt(co)<1e9)
        alert("Enter Contact number correct")
      else
      {
          c(add(fn,ln,co,e))
      }

  }

  render()
  {
    return(
      <View style={styles.cotainer}>
      <View style={styles.TextContainer}>
        <Text style={styles.bigBlue}>What trusted contact are we adding to Abc's account ?</Text>
      </View>
      <View style={styles.TextInputContainer}>
        <TextInput style={styles.input} placeholder="First Name" 
            placeholderTextColor='#95afc0' selectionColor={'#f00'}
            defaultValue={this.state.fname} onChangeText={(fn)=>this.setState({fname:fn})}
        />
        <TextInput style={styles.input} placeholder="Last Name"
             placeholderTextColor='#95afc0'
             defaultValue={this.state.lname} onChangeText={(ln)=>this.setState({lname:ln})}
        />
        <TextInput style={styles.input} placeholder="Contact Number" 
            keyboardType='numeric' placeholderTextColor='#95afc0'
            defaultValue={this.state.contact} onChangeText={(c)=>this.setState({contact:c})}
        />
        <TextInput style={styles.input} placeholder="Email ID" 
            placeholderTextColor='#95afc0'
            defaultValue={this.state.email} onChangeText={(e)=>this.setState({email:e})}
        />
      </View>
      <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.btn} onPress={this.save.bind(this)}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={()=>{c(reset());
       this.setState({
        fname:b.FirstName,
        lname:b.LastName,
        contact:b.Contact,
        email:b.Email
      })}}>
        <Text style={styles.btnText}>Reset</Text>
      </TouchableOpacity>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create(
  {
    cotainer:
    {
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#fff'
    },
    input:
    {
      backgroundColor:'#fff',
      height:50,
      width:'80%',
      margin:18,
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
      alignContent:'center',
      fontSize:28,
    },
    bigBlue:
    {
      color:'#005',//#230e86
      fontSize:25,
    },
    TextContainer:
    {
      marginRight:20,
      marginLeft:20,
      alignItems:'flex-end',
      justifyContent:'flex-end',
      flex:1
    },
    TextInputContainer:
    {
      flex:4,
      justifyContent:'center',
      alignItems:'center'
    },
    btnContainer:
    {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      width:'100%'
    },
    btn:
    {
      backgroundColor:'#0abde3',
      borderRadius:30,
      height:50,
      width:'90%',
      alignItems:'center',
      justifyContent:'center',
    },
    btnText:
    {
      color:'snow',
      fontSize:20
    }
  }
)
const Login = createSwitchNavigator(
    {
        Login:
        {
            screen:Demo
        }
    }
)
const mapStateToProps=(state)=>
{
  console.log("States",state)
  b = state.Reducer2
  console.log("B",b)
  return(
  {}
  )
}
const mapDispatchToProps=(dispatch)=>
{
  console.log(dispatch);
  c = dispatch
  return(
    {}
  )
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);