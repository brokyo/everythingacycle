export default {
    synthConfig: {
        partials: [1, 0.855, 0.675],
        envelope: {
            "attack": 0.65,
            "attackCurve": "linear",
            "decay": 0.1,
            "release": 2,
            "releaseCurve": "linear",
            "sustain": 0.3
        }
    },
    tremoloConfig: {
        "depth": 0.5,
        "frequency": 10,
        "spread": 180,
        "type": "sine",
        "wet": 0.5
    },
    vibratoConfig: {
        "depth": 0.1,
        "frequency": 5,
        "maxDelay": 0.14,
        "type": "sine",
        "wet": 0.5
    },
    phaserConfig: {
        "Q": 10,
        "baseFrequency": 350,
        "frequency": 0.5,
        "octaves": 3,
        "stages": 10,
        "wet": 0.2
    },
    feedbackDelayConfig: {
        "delayTime": 0.25,
        "feedback": 0.5,
        "wet": 0.45
    },
    chorusConfig: {
        "delayTime": 3.5,
        "depth": 0.7,
        "feedback": 0.1,
        "frequency": 1.5,
        "spread": 180,
        "type": "sine",
        "wet": 0
    },
    EQ3Config: {
        "high": 0,
        "low": 0,
        "mid": 0
    },
    reverbConfig: {
        "roomSize": 0.7,
        "dempening": 3000
    },
    filterConfig: {
        "Q": 0,
        "active": true,
        "frequency": 20000,
        "rolloff": -12,
        "type": "lowpass"
    },
}