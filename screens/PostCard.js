import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar,
    Image,
    Dimensions
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons"
import { RFValue } from "react-native-responsive-fontsize";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
import { Alert } from "react-native-web";

export default class PostCard extends Component {

    async addPost(){
        if(this.state.caption){
            let postData = {
                preview_image: this.state.preview_image,
                caption: this.state.caption,
                author: firebase.auth().currentUser.displayName,
                created_on: new Date(),
                author_uid: firebase.auth().currentUser.uid,
                profile_image: this.state.profile_image,
                likes: 0
            };
            await firebase
                .database()
                .ref(
                    "/posts/" + 
                    Math.random()
                        .toString(36)
                        .slice(2)
                )
                .set(postData)
                .then(function (snapshot) {});
        } else {
            Alert.alert(
                "Error",
                "All fields are required",
                [{ text: "OK", onPress: () => console.log("OK Pressed")}],
                { cancelable: false }
            );
        }
    }

    render() {
        return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.authorContainer}>
                    <View style={styles.authorImageContainer}>
                        <Image
                            source={require("../assets/profile_img.png")}
                            style={styles.storyImage}
                        ></Image>
                    </View>

                        <View style={styles.authorNameContainer}>
                            <Text style={styles.authorNameText}> {this.props.post.author} </Text>
                        </View>
                </View>
                
                <Image source={require('../assets/post.jpeg')} style={styles.postImage}/>
                <View style={styles.captionContainer}>
                    <Text style={styles.captionText}>
                        {this.props.post.caption}
                    </Text>
                </View>

                        <View style={styles.actionContainer}>
                            <View style={styles.likeButton}>
                                <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                                <Text style={styles.likeText}>12k</Text>
                            </View>
                        </View>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardContainer: {
        margin: RFValue(13),
        backgroundColor: "#2f345d",
        borderRadius: RFValue(20)
    },
    storyImage: {
        resizeMode: "contain",
        width: "95%",
        alignSelf: "center",
        height: RFValue(250)
    },
    titleContainer: {
        paddingLeft: RFValue(20),
        justifyContent: "center"
    },
    storyTitleText: {
        fontSize: RFValue(25),
        fontFamily: "Bubblegum-Sans",
        color: "white"
    },
    storyAuthorText: {
        fontSize: RFValue(18),
        fontFamily: "Bubblegum-Sans",
        color: "white"
    },
    descriptionText: {
        fontFamily: "Bubblegum-Sans",
        fontSize: 13,
        color: "white",
        paddingTop: RFValue(10)
    },
    actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: RFValue(10)
    },
    likeButton: {
        width: RFValue(160),
        height: RFValue(40),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#eb3948",
        borderRadius: RFValue(30)
    },
    likeText: {
        color: "white",
        fontFamily: "Bubblegum-Sans",
        fontSize: RFValue(25),
        marginLeft: RFValue(5)
    }
});