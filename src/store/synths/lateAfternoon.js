export default {
    name: 'Late Afternoon 3',
    bus: {
        tick: false,
        colorChange: false
    },
    config: {
        synth: {
            volume: -10,
            oscillator: {
                partials: [1, 0.93, 0.245, 0.15, 0, 0, 0, 0, 0.01, 0, 0, 0, 0],
            },
            envelope: {
                "attack": 0.05,
                "attackCurve": "exponential",
                "decay": 0.8,
                "release": 0.05,
                "releaseCurve": "exponential",
                "sustain": 0.7
            }
        },
        tremolo: {
            "depth": 1,
            "frequency": 0.85,
            "spread": 20,
            "type": "sine",
            "wet": 0
        },
        vibrato: {
            "depth": 0.05,
            "frequency": 1.1,
            "maxDelay": 0.07,
            "type": "sine",
            "wet": 0.7
        },
        phaser: {
            "Q": 10,
            "baseFrequency": 3533,
            "frequency": 3.5,
            "octaves": 3,
            "stages": 10,
            "wet": 0
        },
        feedbackDelay: {
            "delayTime": 0.03,
            "feedback": 0.1,
            "wet": 0.15
        },
        chorus: {
            "delayTime": 0.9,
            "depth": 0.15,
            "feedback": 0.1,
            "frequency": 1.5,
            "spread": 180,
            "type": "sine",
            "wet": 0.15
        },
        EQ3: {
            "high": "-15",
            "low": "-11",
            "mid": "-16"
        },
        reverb: {
            "dampening": "2000",
            "roomSize": "0"
        },
        filter: {
            "Q": "3",
            "active": true,
            "frequency": 310,
            "rolloff": -12,
            "type": "bandpass"
        }
    },

    patch: {
        synth: {},
        tremolo: {},
        vibrato: {},
        phaser: {},
        feedbackDelay: {},
        chorus: {},
        EQ3: {},
        reverb: {},
        filter: {},
        autoPanner: {},
        out: {}
    },
    // loop: {

    //     core: [{
    //         "triggers": ["D3", "C5", "Bb2"],
    //         "velocity": 0.8,
    //         "time": "0:0",
    //         "direction": 'down',
    //         "duration": "0:2"
    //     }, {
    //         "triggers": ["C3", "Bb4", "A2"],
    //         "velocity": 0.8,
    //         "time": "0:3",
    //         "direction": 'down',
    //         "duration": "0:2"
    //     }, {
    //         "triggers": ["E3", "D5", "C3" ],
    //         "velocity": 0.6,
    //         "time": "0:5",
    //         "direction": 'up',
    //         "duration": "0:2"
    //     }, {
    //         "triggers": ["G2", "Bb2", "A4"],
    //         "velocity": 0.8,
    //         "time": "1:2",
    //         "direction": 'down',
    //         "duration": "0:2"
    //     }, {
    //         "triggers": ["A2", "Bb4", "C3"],
    //         "velocity": 0.8,
    //         "time": "1:4",
    //         "direction": 'down',
    //         "duration": "0:2"
    //     }, {
    //         "triggers": ["Bb2", "A4", "G2"],
    //         "velocity": 0.6,
    //         "time": "2:2",
    //         "direction": 'up',
    //         "duration": "0:2"
    //     }, {
    //         "triggers": ["A2", "G4", "F2"],
    //         "velocity": 0.8,
    //         "time": "2:4",
    //         "direction": 'down',
    //         "duration": "0:2"
    //     }],
    //     extra: [{
    //      "triggers": ["B2", "A4", "G2"],
    //      "velocity": 0.6,
    //      "time": "3:2",
    //      "direction": "up",
    //      "duration": "1:0"
    //     },{
    //      "triggers": ["A2", "Bb4", "C3"],
    //      "velocity": 0.6,
    //      "time": "4:2",
    //      "direction": "up",
    //      "duration": "1:0"
    //     }]
    // },
    loop: {
        core: {
            "loopLength": "1:2:0",
            "events": [{
                    "note": [
                        "F2",
                        "A2"
                    ],
                    "velocity": "0.5",
                    "time": "0:0:0",
                    "duration": "1:2:0",
                    "active": false
                },
                {
                    "note": [
                        "C3"
                    ],
                    "velocity": "0.8",
                    "time": "0:1:0",
                    "duration": "0:2:0",
                    "active": false
                },
                {
                    "note": [
                        "Bb3",
                        "D4"
                    ],
                    "velocity": "0.2",
                    "time": "1:0:0",
                    "duration": "0:2:0",
                    "active": false,
                    tick: true
                },
                {
                    "note": [
                        "G3"
                    ],
                    "velocity": 0.8,
                    "time": "1:1:0",
                    "duration": "0:1:0",
                    "active": false,
                    tick: true
                }
            ]
        },
        extra: {
            "loopLength": "5:2:0",
            "events": [{
                    "note": [
                        "G2",
                        "Bb2"
                    ],
                    "velocity": "0.4",
                    "time": "1:2:0",
                    "duration": "3:0:0",
                    "active": false
                },
                {
                    "note": [
                        "D3"
                    ],
                    "velocity": 0.8,
                    "time": "1:3:0",
                    "duration": "0:2:0",
                    "active": false
                },
                {
                    "note": [
                        "C3",
                        "E4"
                    ],
                    "velocity": "0.4",
                    "time": "2:2:0",
                    "duration": "0:2:0",
                    "active": false,
                    colorChange: true
                },
                {
                    "note": [
                        "D3",
                        "F4"
                    ],
                    "velocity": "0.3",
                    "time": "3:0:0",
                    "duration": "0:2:0",
                    "active": false,
                    colorChange: true
                },
                {
                    "note": [
                        "C3",
                        "E4"
                    ],
                    "velocity": "0.3",
                    "time": "3:2:0",
                    "duration": "0:2:0",
                    "active": false,
                    colorChange: true
                },
                {
                    "note": [
                        "A2",
                        "C4"
                    ],
                    "velocity": "0.2",
                    "time": "4:0:0",
                    "duration": "0:2:0",
                    "active": false,
                    colorChange: true
                },
                {
                    "note": [
                        "Bb2",
                        "D3"
                    ],
                    "velocity": "0.2",
                    "time": "4:2:0",
                    "duration": "1:2:0",
                    "active": false,
                    colorChange: true
                },
                {
                    "note": [
                        "A3"
                    ],
                    "velocity": "0.2",
                    "time": "4:2:0",
                    "duration": "0:2:0",
                    "active": false
                },
                {
                    "note": [
                        "F3",
                        "F2"
                    ],
                    "velocity": "0.2",
                    "time": "5:0:0",
                    "duration": "1:0:0",
                    "active": false
                }
            ]
        }
    },
    // Pass AssembleSynth() a reference to ToneJS so it can do Tone stuff.
    assembleSynth: function(Tone) {
        this.patch.synth = new Tone.PolySynth(10, Tone.Synth);
        this.patch.synth.set(this.config.synth);
        this.patch.tremolo = new Tone.Tremolo(this.config.tremolo);
        this.patch.vibrato = new Tone.Vibrato(this.config.vibrato);
        this.patch.phaser = new Tone.Phaser(this.config.phaser);
        this.patch.feedbackDelay = new Tone.FeedbackDelay(this.config.feedbackDelay);
        this.patch.chorus = new Tone.Chorus(this.config.chorus);
        this.patch.EQ3 = new Tone.EQ3(this.config.EQ3);
        this.patch.reverb = new Tone.Freeverb(this.config.reverb);
        if (this.config.filter.active) {
            this.patch.filter = new Tone.Filter(this.config.filter)
            this.patch.filter.set(this.config.filter)
        } else {
            this.patch.filter = new Tone.Gain()
        };
        this.patch.out = new Tone.Gain();
        this.patch.synth.chain(this.patch.tremolo, this.patch.vibrato, this.patch.phaser, this.patch.feedbackDelay, this.patch.chorus, this.patch.EQ3, this.patch.reverb, this.patch.filter, this.patch.out);


        return new Promise((resolve, reject) => {
            resolve(true);
        })
    },

    start: function(Tone, _, originSystem, firstRound) {
        let system

        if (firstRound) {
            system = this
        } else {
            system = originSystem
        }


        let playEvents = _.cloneDeep(system.loop.core.events)

        let coinFlip
        if (_.random(5) === 1) {
            system.loop.extra.events.forEach(event => {
                playEvents.push(event)
            })

        }

        let lastEvent = _.last(playEvents)

        playEvents.forEach((event, index) => {
            // All scheduling happens in advance so tell Tone's context when to play the note
            Tone.Transport.schedule(time => {
                // compute the time to schedule the event
                let eventTime = time + Tone.Time(event.time).toSeconds()

                system.patch.synth.triggerAttackRelease(event.note, event.duration, eventTime, Number(event.velocity))

                // Tell this object to change the direction in bus at the same time as above 
                Tone.Draw.schedule(() => {

                    if (event.tick) {
                        system.bus.tick = true
                    }

                    if (event.colorChange) {
                        system.bus.colorChange = true
                    }

                }, eventTime)

            })

        })

        // Compute interval from tone measure times, make milliseconds, and then take 50ms away to improve sceduling
        let interval = ((Tone.Time(lastEvent.time).toSeconds() + Tone.Time(lastEvent.duration).toSeconds()) * 1000)
        setTimeout(system.start, interval, Tone, _, system, false)

    }
}