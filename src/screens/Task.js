import React from "react";
import { View, Text } from "react-native"

const Task = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white", gap: 5, marginTop: 5}}>
        <View 
            style={{ backgroundColor: "#5DADE2", width: "100", height: "10%"}}>
            <Text style={{ color: "white", fontSize: 20, textAlign: "center", paddingTop: 12}}>Header</Text>
        </View>

        <View 
            style={{ backgroundColor: "white", width: "100%", height: "62%", flexDirection: "row", gap: 5}}>
            
            <View 
                style={{ backgroundColor: "white", flex: 2, gap: 5}}>
                  <View 
                style={{ backgroundColor: "#D7BDE2", flex: 2}}>
                  <Text style={{ color: "white", fontSize: 20,  textAlign: "center", paddingTop: 10}}>Hero</Text>
                </View>

            <View 
                style={{ backgroundColor: "#7DCEA0", flex: 3.5}}>
                  <Text style={{ color: "white", fontSize: 20 ,textAlign: "center", paddingTop: 10}}>Sidebar</Text>
                </View>
                </View>

            <View 
                style={{flex: 3, gap: 5}}>
                  <View 
                style={{ backgroundColor: "#F1C40F", flex: 4}}>
                  <Text style={{ color: "white", fontSize: 20, textAlign: "center",paddingTop: 10}}>Main Content</Text>
          
                </View>

            <View 
                style={{ backgroundColor: "grey", flex: 2}}>
                  <Text style={{ color: "white", fontSize: 20,textAlign: "center",paddingTop: 10}}>Extra Content</Text>
                </View>
            </View>
        </View>
        <View  
          style={{ backgroundColor: "white", width: "100%", height: "18%", flexDirection: "row", justifyContent: "space-between", gap:5 }}>
            <View 
              style={{ backgroundColor: "#27AE60", flex: 4.8}}>
                <Text style={{ color: "white", fontSize: 20 ,textAlign: "center",paddingTop: 10}}>Related Images</Text>
              </View>
            <View 
              style={{ backgroundColor: "#D7BDE2", flex: 2}}>
                <Text style={{ color: "white", fontSize: 20 ,textAlign: "center",paddingTop: 10}}>Related Posts</Text>
              </View>
        </View>

        <View style={{ backgroundColor: "#F1C40F", flexDirection: "column", flex: 1, marginBottom: 5}}>
          <Text style={{ color: "white", fontSize: 20 , textAlign: "center", paddingTop: 8}}>Footer</Text>
        </View>
    </View>
  )
}





export default Task;

