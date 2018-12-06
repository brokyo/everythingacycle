export default {
    synthConfig: {
        partials: [0.165, 0, 0.03, 0, 0.025, 0, 0.025, 0, 0.025, 0, 0.03, 0, 0.035, 0, 0, 0.085, 0.07],
        envelope: {
            "attack": 3.8,
            "attackCurve": "linear",
            "decay": 0.1,
            "release": 3.75,
            "releaseCurve": "linear",
            "sustain": 0.2
        }
    },
    tremoloConfig: {
        "depth": 0.5,
        "frequency": 10,
        "spread": 180,
        "type": "sine",
        "wet": 0.05
    },
    vibratoConfig: {
        "depth": 0.1,
        "frequency": 5,
        "maxDelay": 0.005,
        "type": "sine",
        "wet": 0.1
    },
    phaserConfig: {
        "Q": 10,
        "baseFrequency": 350,
        "frequency": 0.5,
        "octaves": 3,
        "stages": 10,
        "wet": 0
    },
    feedbackDelayConfig: {
        "delayTime": 0.015,
        "feedback": 0.5,
        "wet": 0.05
    },
    chorusConfig: {
        "delayTime": 3.5,
        "depth": 0.7,
        "feedback": 0.15,
        "frequency": 1.5,
        "spread": 180,
        "type": "sine",
        "wet": 0.6
    },
    EQ3Config: {
        "high": 0,
        "low": "-21",
        "mid": "-12"
    },
    reverbConfig: {
        "roomSize": 0.7,
        "dempening": 3000
    },
    filterConfig: {
        "Q": 0,
        "active": true,
        "frequency": 536,
        "rolloff": -12,
        "type": "lowpass"
    },
    autoPannerConfig: {
        frequency: 1,
        type: 'sine',
        depth: 1
    }
}