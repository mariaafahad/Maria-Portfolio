import React from 'react';
import Particles from 'react-particles-js';
import ParticleConfig from './particle.config';

const ParticleBackgroud = () => {
    return (
        <div>
            <Particles params={ParticleConfig} />
        </div>
    );
};

export default ParticleBackgroud;