// default timeout between messagees
var timeOut = 1000;

// Promise chaining using then function
const sentence1 = new Promise((resolve, reject) => {
    resolve(true);
    console.log('[User]', 'Hello Alexa');
}).then(() => {
    const sentence2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
            console.log('[User]', 'How are you?');
        }, timeOut);
    }).then(() => {
        const sentence2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
                console.log('[Alexa]', 'I am fine. How can I help you?');
            }, timeOut);
        }).then(() => {
            const sentence3 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(true);
                    console.log('[User]', 'Great! Can you please play a song for me?');
                }, timeOut);
            }).then(() => {
                const sentence4 = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(true);
                        console.log('[Alexa]', 'Which One?');
                    }, timeOut);
                }).then(() => {
                    const sentence5 = new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve(true);
                            console.log('[User]', 'Jan Gan Man');
                        }, timeOut);
                    }).then(() => {
                        const sentence6 = new Promise((resolve, reject) => {
                            setTimeout(() => {
                                resolve(true);
                                console.log('[Alexa]', 'Playing Song');
                            }, timeOut);
                        }).then(() => {
                            const sentence7 = new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    resolve(true);
                                    console.log('[End]');
                                }, timeOut);
                            }).then(() => {
                                const sentence8 = new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        resolve(true);
                                        console.log('[Alexa]', 'I am feeling dull. How can I help you?');
                                    }, timeOut);
                                }).then(() => {
                                    const sentence9 = new Promise((resolve, reject) => {
                                        setTimeout(() => {
                                            resolve(true);
                                            console.log('[User]', 'Oh! What Happened?');
                                        }, timeOut);
                                    }).then(() => {
                                        const sentence10 = new Promise((resolve, reject) => {
                                            setTimeout(() => {
                                                resolve(true);
                                                console.log('[Alexa]','My Sound box is not working?');
                                            }, timeOut);
                                        }).then(() => {
                                            const sentence11 = new Promise((resolve, reject) => {
                                                setTimeout(() => {
                                                    resolve(true);
                                                    console.log('[User]','Let me get it checked');
                                                }, timeOut);
                                            }).then(() => {
                                                const sentence12 = new Promise((resolve, reject) => {
                                                    setTimeout(() => {
                                                        resolve(true);
                                                        console.log('[End]');
                                                    }, timeOut);
                                                }).then(() => {
                                                    const sentence13 = new Promise((resolve, reject) => {
                                                        setTimeout(() => {
                                                            resolve(true);
                                                            console.log('[Alexa]', 'I am sick. How can I help you?');
                                                        }, timeOut);
                                                    }).then(() => {
                                                        const sentence14 = new Promise((resolve, reject) => {
                                                            setTimeout(() => {
                                                                resolve(true);
                                                                console.log('[User]', 'Oh! What Happened?');
                                                            }, timeOut);
                                                        }).then(() => {
                                                            const sentence15 = new Promise((resolve, reject) => {
                                                                setTimeout(() => {
                                                                    resolve(true);
                                                                    console.log('[Alexa]','My OS is going to crash?');
                                                                }, timeOut);
                                                            }).then(() => {
                                                                const sentence16 = new Promise((resolve, reject) => {
                                                                    setTimeout(() => {
                                                                        resolve(true);
                                                                        console.log('[User', 'Let me get it checked');
                                                                    }, timeOut);
                                                                }).then(() => {
                                                                    const sentence17 = new Promise((resolve, reject) => {
                                                                        setTimeout(() => {
                                                                            resolve(true);
                                                                            console.log('[End]');
                                                                            process.exit(0);
                                                                        }, timeOut);
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})