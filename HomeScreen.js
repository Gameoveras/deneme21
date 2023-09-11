import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ActivityIndicator, Image } from 'react-native';
import ApiService from './api';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eposta: '',
            parola: '',
            loading: false,
        };
    }

    signIn = async () => {//@
        try {
          this.setState({ loading: true });
          const { eposta, parola } = this.state;
    
          // API servisini kullanarak giriş yapma işlemini gerçekleştirin
          const user = await ApiService.signIn(eposta, parola);
    
          // Giriş başarılı, kullanıcı bilgilerini kullanabilirsiniz
          console.log('Giriş başarılı:', user);
          this.props.navigation.navigate('Sistemler');
        } catch (error) {
          console.error('Giriş hatası:', error.message);
          Alert.alert('Hata', 'Giriş başarısız. Lütfen doğru bilgileri girin.');
        } finally {
          this.setState({ loading: false });
        }
      };

    render() {
        const { loading } = this.state;

        return (
            <View colors={['red', 'white']} style={styles.container}>
               

                <TextInput
                    style={[styles.input, { color: 'black' }]}
                    placeholder="E-posta"
                    placeholderTextColor="black"
                    onChangeText={(text) => this.setState({ eposta: text })}
                />
                <TextInput
                    style={[styles.input, { color: 'black' }]}
                    placeholder="Parola"
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({ parola: text })}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.signIn}
                        disabled={loading}
                    >
                        <Text style={styles.buttonText}>
                            {loading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('IstekHesap')}
                    >
                        <Text style={styles.buttonText}>Kaydol</Text>
                    </TouchableOpacity>
                </View>
                {loading && (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" />
                        <Text style={styles.loadingText}>Giriş yapılıyor...</Text>
                    </View>
                )}
          
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        padding: 10,
        marginVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'black',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginVertical: 10,
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        width: '48%',
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 25,
    },
    logo2: {
        width: 100,
        height: 100,
        marginTop: 10,
    },
    loadingContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingText: {
        color: 'black',
        marginTop: 10,
    },
});

export default HomeScreen;