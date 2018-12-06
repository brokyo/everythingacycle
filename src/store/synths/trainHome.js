export default {
    name: 'The Train Home',
    bus: {
        change: true
    },
    config: {
        synthConfig: {
            partials: [1, 0.045, 0.045, 0.005, 0.015, 0.005, 0, 0],
            envelope: {
                "attack": 0.05,
                "attackCurve": "exponential",
                "decay": 1.4,
                "release": 1.85,
                "releaseCurve": "sine",
                "sustain": 0.1
            }
        },
        tremoloConfig: {
            "depth": 0.5,
            "frequency": 10,
            "spread": 180,
            "type": "sine",
            "wet": 0
        },
        vibratoConfig: {
            "depth": 0.1,
            "frequency": 5,
            "maxDelay": 0.005,
            "type": "sine",
            "wet": 0
        },
        phaserConfig: {
            "Q": 10,
            "baseFrequency": 134,
            "frequency": 0.1,
            "octaves": 3,
            "stages": 10,
            "wet": 0
        },
        feedbackDelayConfig: {
            "delayTime": 0.05,
            "feedback": 0.2,
            "wet": 1
        },
        chorusConfig: {
            "delayTime": 2,
            "depth": 0.3,
            "feedback": 0.1,
            "frequency": 0.6,
            "spread": 67,
            "type": "sine",
            "wet": 0.05
        },
        EQ3Config: {
            "high": "-6",
            "low": "-10",
            "mid": "-9"
        },
        reverbConfig: {
            "dampening": "579",
            "roomSize": "0"
        },
        filterConfig: {
            "Q": "3",
            "active": true,
            "frequency": 299,
            "rolloff": -12,
            "type": "lowpass"
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
    loop: {
        core: [{
            "note": "D5",
            "velocity": 0.8,
            "start": "0:0",
            "duration": "2n"
        }, {
            "note": "E3",
            "velocity": 0.8,
            "start": "0:0",
            "duration": "2n"
        }, {
            "note": "C3",
            "velocity": 0.8,
            "start": "0:0",
            "duration": "2n"
        }, {
            "note": "C5",
            "velocity": 0.8,
            "start": "0:2",
            "duration": "2n"
        }, {
            "note": "Bb2",
            "velocity": 0.8,
            "start": "0:2",
            "duration": "2n"
        }, {
            "note": "D3",
            "velocity": 0.8,
            "start": "0:2",
            "duration": "2n"
        }, {
            "note": "Bb4",
            "velocity": 0.8,
            "start": "1:0",
            "duration": "2n"
        }, {
            "note": "C3",
            "velocity": 0.8,
            "start": "1:0",
            "duration": "2n"
        }, {
            "note": "A2",
            "velocity": 0.8,
            "start": "1:0",
            "duration": "2n"
        }, {
            "note": "A4",
            "velocity": 0.8,
            "start": "1:2",
            "duration": "2n"
        }, {
            "note": "Bb2",
            "velocity": 0.8,
            "start": "1:2",
            "duration": "2n"
        }, {
            "note": "G2",
            "velocity": 0.8,
            "start": "1:2",
            "duration": "2n"
        }, {
            "note": "C5",
            "velocity": 0.8,
            "start": "2:0",
            "duration": "2n"
        }, {
            "note": "D3",
            "velocity": 0.8,
            "start": "2:0",
            "duration": "2n"
        }, {
            "note": "Bb2",
            "velocity": 0.8,
            "start": "2:0",
            "duration": "2n"
        }, {
            "note": "Bb4",
            "velocity": 0.8,
            "start": "2:2",
            "duration": "2n"
        }, {
            "note": "C3",
            "velocity": 0.8,
            "start": "2:2",
            "duration": "2n"
        }, {
            "note": "A2",
            "velocity": 0.8,
            "start": "2:2",
            "duration": "2n"
        }, {
            "note": "A4",
            "velocity": 0.8,
            "start": "3:0",
            "duration": "2n"
        }, {
            "note": "Bb2",
            "velocity": 0.8,
            "start": "3:0",
            "duration": "2n"
        }, {
            "note": "G2",
            "velocity": 0.8,
            "start": "3:0",
            "duration": "2n"
        }, {
            "note": "F2",
            "velocity": 0.8,
            "start": "3:2",
            "duration": "2n"
        }, {
            "note": "G4",
            "velocity": 0.8,
            "start": "3:2",
            "duration": "2n"
        }, {
            "note": "A2",
            "velocity": 0.8,
            "start": "3:2",
            "duration": "2n",
            colorChange: true
        }],
    },
    assembleSynth: function(Tone) {
        this.patch.synth = new Tone.PolySynth(10, Tone.Synth)
        this.patch.synth.set(this.config.synth)
        this.patch.tremolo = new Tone.Tremolo(this.config.tremolo)
        this.patch.vibrato = new Tone.Vibrato(this.config.vibrato)
        this.patch.phaser = new Tone.Phaser(this.config.phaser)
        this.patch.feedbackDelay = new Tone.FeedbackDelay(this.config.feedbackDelay)
        this.patch.chorus = new Tone.Chorus(this.config.chorus)
        this.patch.EQ3 = new Tone.EQ3(this.config.EQ3)
        this.patch.reverb = new Tone.Freeverb(this.config.reverb)
        this.patch.filter = new Tone.Filter(this.config.filter)
        this.patch.out = new Tone.Gain()

        this.patch.synth.chain(this.patch.tremolo, this.patch.vibrato, this.patch.phaser, this.patch.feedbackDelay, this.patch.chorus, this.patch.EQ3, this.patch.reverb, this.patch.filter, this.patch.out)

        return new Promise((resolve, reject) => {
            resolve(true)
        })
    },
    start: function() {
        console.log(this.name, 'started')
        this.change = true
        this.patch.synth.triggerAttackRelease('440', 1)
    }
}