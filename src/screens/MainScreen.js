import React ,{Component} from 'react'
import {View,StyleSheet} from 'react-native'
import {connect} from "react-redux";
import axios from 'axios'
import {Map} from "../components/Map";
import {Weather} from "../components/Weather";
import {Coord} from "../components/Coord";
import {addInfo} from "../store/actions/info";
import Geocoder from "react-native-geocoding";



 class MainScreen extends Component{


    constructor(props) {
        super(props);
        this.state = {
            coords: {
                latitude: 0,
                longitude: 0,
                error: null,

            },
            address: '',
            weather: {
                temp:0,
                description: '',
                icon: '',
                defIcon:'https://openweathermap.org/img/w/00d.png'
            },
            date:''

        }
    }

    componentDidMount() {
        const googleApiKey = 'AIzaSyBN6ARDit5b20ERLTpaWqptAtSJpobvNtM';
        Geocoder.init(googleApiKey);
        const apiKey = 'dd2ba74be97aa6b4e3f359e8bc55300e'
         navigator.geolocation.getCurrentPosition(position =>{
                this.setState({coords:{
                        latitude: position.coords.latitude,
                        longitude:position.coords.longitude,
                        error:null
                    }})
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.coords.latitude}&lon=${this.state.coords.longitude}&appid=${apiKey}&units=metric&lang=ru`;

                axios.get(url).then(res=>{
                    this.setState({weather:{
                            temp: res.data.main.temp,
                            description:res.data.weather[0].description,
                            icon: `https://openweathermap.org/img/w/${res.data.weather[0].icon}.png`
                        }
                    })
                    if (this.state.coords.latitude){this.props.addInfo(this.state)}
                })

                Geocoder.from(this.state.coords.latitude,this.state.coords.longitude).then(res=>{
                    this.setState({address:res.results[0].formatted_address})
                 })

                const date = new Date()
                const options = {
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                    timezone: 'UTC',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric'
                };
                this.setState({
                    date:date.toLocaleString('ru',options)
                })
            },
            error => this.setState({coords:{error:error.message}}),
            {enableHighAccuracy:true,timeout:20000,maximumAge:2000}
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <Coord
                    coords={this.state.coords}
                    address={this.state.address}
                />

                <Map
                    coords={this.state.coords}
                />
                <Weather
                    weather={this.state.weather}
                />
            </View>
        )
    }
}

MainScreen.navigationOptions = {
    headerTitle: 'Текущее местоположение'
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
        backgroundColor:'#fff'

    }
})

function mapStateToProps(state){
    return{
      infoArr:state.infoArr
    }
}
function mapDispatchToProps(dispatch){
     return{
        addInfo: info => dispatch(addInfo(info))
     }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainScreen)