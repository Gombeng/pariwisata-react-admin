import React, { useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import BarLoader from 'react-spinners/BarLoader';
import BeatLoader from 'react-spinners/BeatLoader';
import PacmanLoader from 'react-spinners/PacmanLoader';
import BounceLoader from 'react-spinners/BounceLoader';
import CircleLoader from 'react-spinners/CircleLoader';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import ClockLoader from 'react-spinners/ClockLoader';
import DotLoader from 'react-spinners/DotLoader';
import FadeLoader from 'react-spinners/FadeLoader';
import GridLoader from 'react-spinners/GridLoader';
import HashLoader from 'react-spinners/HashLoader';
import MoonLoader from 'react-spinners/MoonLoader';
import PropagateLoader from 'react-spinners/PropagateLoader';
import PuffLoader from 'react-spinners/PuffLoader';
import PulseLoader from 'react-spinners/PulseLoader';
import RingLoader from 'react-spinners/RingLoader';
import RiseLoader from 'react-spinners/RiseLoader';
import RotateLoader from 'react-spinners/RotateLoader';
import ScaleLoader from 'react-spinners/ScaleLoader';
import SyncLoader from 'react-spinners/SyncLoader';

export const Spinner = () => {
	const [loading, setLoading] = useState(true);
	return (
		<div>
            <h2>Testing spinner</h2>
			<button onClick={() => setLoading(!loading)}>Toggle Loader</button>
            <br />
            <br />
            <br />

			<ClipLoader loading={loading} />
			<BarLoader loading={loading}  />
			<BeatLoader loading={loading} />
			<PacmanLoader loading={loading} />
			<BounceLoader loading={loading} />
			<CircleLoader loading={loading} />
			<ClimbingBoxLoader loading={loading} />
			<ClockLoader loading={loading} />
			<DotLoader loading={loading} />
			<FadeLoader loading={loading} />
			<GridLoader loading={loading} />
			<HashLoader loading={loading} />
			<MoonLoader loading={loading} />
			<PropagateLoader loading={loading} />
			<PuffLoader loading={loading} />
			<PulseLoader loading={loading} />
			<RingLoader loading={loading} />
			<RiseLoader loading={loading} />
			<RotateLoader loading={loading} />
			<ScaleLoader loading={loading} />
			<SyncLoader loading={loading} />
		</div>
	);
}

















