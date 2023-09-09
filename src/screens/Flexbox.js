import React from "react";
import { View, Text } from "react-native"

const Flexbox = () => {
  return (
    
    <View style={{ flex: 1 }}>
        <View 
            style={{backgroundColor: "aqua", width: 400, height: 400, flex: 1, flexDirection: "row",
            justifyContent: "space-evenly", alignItems: "stretch"
            }}
            >

            <View 
                style={{backgroundColor: "blue", flex: 1}}>
            </View>
            <View 
                style={{backgroundColor: "red", flex: 2}}>
            </View>
            <View 
                style={{backgroundColor: "green", flex: 3}}>

<View 
            style={{backgroundColor: "aqua", width: 400, height: 400, flex: 2, flexDirection: "column",
            justifyContent: "space-evenly", alignItems: "stretch"
            }}
            >

        <View 
            style={{backgroundColor: "yellow", flex: 2}}>
        </View>
        <View 
            style={{
                backgroundColor: "red", flex: 1}}>
        </View>
        <View 
            style={{backgroundColor: "green", flex: 2}}>
        </View>
    </View>

            </View>
        </View>

        <View 
            style={{backgroundColor: "aqua", width: 400, height: 400, flex: 2, flexDirection: "column",
            justifyContent: "space-evenly", alignItems: "stretch"
            }}
            >

        <View 
            style={{backgroundColor: "yellow", flex: 2}}>
        </View>
        <View 
            style={{
                backgroundColor: "red", flex: 1}}>
        </View>
        <View 
            style={{backgroundColor: "green", flex: 2}}>
        </View>
    </View>

    </View>

  )
}

export default Flexbox;