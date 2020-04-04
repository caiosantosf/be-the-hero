import React from 'react'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import {View, Image, TouchableOpacity, Text} from 'react-native'

import styles from './style'
import logoImg from '../../assets/logo.png'

export default function Detail() {
  const navigation = useNavigation()

  function navigateBack(){
    navigation.goBack()
  }

  function sendMail(){

  }

  function sendWhatApp(){
    
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={logoImg}></Image>

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color='#E82041'></Feather>
        </TouchableOpacity>
      </View>

      <View style={style.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0}]}>ONG:</Text>
        <Text style={styles.incidentValue}>APAD</Text>

        <Text style={styles.incidentProperty}>Caso:</Text>
        <Text style={styles.incidentValue}>Cão da depressao</Text>

        <Text style={styles.incidentProperty}>Valor:</Text>
        <Text style={styles.incidentValue}>123</Text>
      </View>

      <View style={styles.contectBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato</Text>

        <View styles={styles.actions}>
          <TouchableOpacity styles={styles.action} onPress={() => {}}>
            <Text style={styles.actionText}>WhatApp</Text>
          </TouchableOpacity>

          <TouchableOpacity styles={styles.action} onPress={() => {}}>
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}