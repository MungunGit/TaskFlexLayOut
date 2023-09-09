import React from "react";
import { View, Text } from "react-native"

const Task2 = () => {
  return (  
    <View style={{ backgroundColor: "white", flex: 1, flexDirection: "row", gap: 5}}>
        <View style={{ backgroundColor: "white", flex: 1, gap: 5, marginLeft: 5, marginTop: 5, marginBottom: 5}}>
            <View style={{ backgroundColor: "#F1948A", width: "100%", height: "32%" }}></View>
            <View style={{ backgroundColor: "#F1948A", width: "100%", height: "33%" }}></View>
            <View style={{ backgroundColor: "#F1948A", width: "100%", height: "33%"}}></View>
            
        </View>
        <View style={{ backgroundColor: "green", flex: 4, marginBottom: 5, marginRight: 5, marginTop: 5}}>
        <View style={{ backgroundColor: "white", flex: 1}}>
            <View style={{ backgroundColor: "white", width: "100%", height: "50%", gap: 5, flexDirection: "row"}}>
                <View style={{ backgroundColor: "#7DCEA0", flex: 1 }}></View>
                <View style={{ backgroundColor: "#7DCEA0", flex: 1 }}></View>
                <View style={{ backgroundColor: "#7DCEA0", flex: 1 }}></View>
                <View style={{ backgroundColor: "#7DCEA0", flex: 1 }}></View>
            </View>
            <View style={{ backgroundColor: "#808B96", width: "100%", height: "49%", alignItems: "center", paddingTop: "40%", marginTop:5 }}>
                <View style={{ backgroundColor: "yellow", width: 70, height: 70 }}></View>
            </View>
        </View>
        </View>
    </View>
  )
}





export default Task2;
