angular.module('common.fabric.constants', [])

.service('FabricConstants', [function() {

	var objectDefaults = {
		rotatingPointOffset: 20,
		padding: 0,
		borderColor: 'EEF6FC',
		cornerColor: 'rgba(64, 159, 221, 1)',
		cornerSize: 10,
		transparentCorners: false,
		hasRotatingPoint: true,
		centerTransform: true
	};

	return {

		presetSizes: [
			/*{
				name: 'Portrait (8.5 x 11)',
				height: 1947,
				width: 1510
			},
			{
				name: 'Landscape (11 x 8.5)',
				width: 1947,
				height: 1510
			},
			{
				name: 'Business Card (3.5 x 2)',
				height: 368,
				width: 630
			},
			{
				name: 'Postcard (6 x 4)',
				height: 718,
				width: 1068
			},
			{
				name: 'Content/Builder Product Thumbnail',
				height: 400,
				width: 760
			},
			{
				name: 'Badge',
				height: 400,
				width: 400
			},
			{
				name: 'Facebook Profile Picture',
				height: 300,
				width: 300
			},
			{
				name: 'Facebook Cover Picture',
				height: 315,
				width: 851
			},
			{
				name: 'Facebook Photo Post (Landscape)',
				height: 504,
				width: 403
			},
			{
				name: 'Facebook Photo Post (Horizontal)',
				height: 1008,
				width: 806
			},
			{
				name: 'Facebook Full-Width Photo Post',
				height: 504,
				width: 843
			},*/
			{
				name: 'Instagram',
				height: 1080,
				width: 1080
			},
			{
				name: 'Pinterest',
				height: 1102,
				width: 735
			},
			{
				name: 'Facebook',
				height: 960,
				width: 720
			},
			{
				name: 'Twitter',
				height: 512,
				width: 1024
			}
		],

		fonts: [
			{ name: 'Arial' },
			{ name: 'Architects Daughter' },
			{ name: 'Oswald' },
			{ name: 'ONEDAY'},
			{ name: 'Abrakatebra'},
			{ name: 'Metropolis'},
			{ name: 'Lovelo'},
			{ name: 'Dita-Sweet'},
			{ name: 'Bear'},
			{ name: 'Streetwear'},
			{ name: 'PoiretOne'},
			{ name: 'Swistblnk'},
			{ name: 'monospace'},
			{ name: 'sans-serif'},
			{ name: 'fantasy'},
			{ name: 'cursive'},

		],

		fontSizes: [
			{ size: 6 },
			{ size: 8 },
			{ size: 10 },
			{ size: 12 },
			{ size: 14 },
			{ size: 16 },
			{ size: 18 },
			{ size: 21 },
			{ size: 24 },
			{ size: 28 },
			{ size: 32 },
			{ size: 36 },
			{ size: 42 },
			{ size: 48 },
			{ size: 56 },
			{ size: 64 },
			{ size: 72 },
			{ size: 80 },
			{ size: 88 },
			{ size: 96 },
			{ size: 104 },
			{ size: 120 },
			{ size: 140 }
		],
		zoom: [
			{ value: 50 },
			{ value: 67 },
			{ value: 75 },
			{ value: 100 }
		],

		backgroundTemplates: [
		{
			background: '#aa4583',
			color: '#f5d782',
			border: '#78335d'
		},
		{
			background: '#263a55',
			color: '#ffffff',
			border: '#1b293c'
		},
		{
			background: '#97bc72',
			color: '#ffffff',
			border: '#78a850'
		},
		{
			background: '#018db1',
			color: '#fdfdfd',
			border: '#016b9a'
		},
		{
			background: '#e51f14',
			color: '#fff6dc',
			border: '#b9150c'
		},
		{
			background: '#f3d213',
			color: '#22323f',
			border: '#edbc0a'
		},
		{
			background: '#23be19',
			color: '#005400',
			border: '#129e0d'
		},
		{
			background: '#bbf5e7',
			color: '#17535d',
			border: '#94ccbe'
		},
		{
			background: '#dee8ea',
			color: '#fa2b5b',
			border: '#b8c4c6'
		},
		{
			background: '#272727',
			color: '#ffffff',
			border: '#1b1b1b'
		},
		{
			background: '#f8f8f8',
			color: '#2d2d2d',
			border: '#dfdfdf'
		},
		{
			background: '#ffa930',
			color: '#1f2533',
			border: '#ff8f22'
		},
		{
			background: '#554880',
			color: '#ffffff',
			border: '#3c335a'
		},
		{
			background: '#4c7c8a',
			color: '#ffffff',
			border: '#355767'
		},
		{
			background: '#18c3a9',
			color: '#011e1b',
			border: '#11b18f'
		},
		{
			background: '#a0b58d',
			color: '#1a110a',
			border: '#849f6b'
		},
		{
			background: '#ee4996',
			color: '#ffffff',
			border: '#e93377'
		},
		{
			background: '#ffffff',
			color: '#2d2d2d',
			border: '#e6e6e6'
		},
		{
			background: '#37a5fb',
			color: '#ffffff',
			border: '#278afa'
		},
		{
			background: '#f24f1d',
			color: '#ffffff',
			border: '#ee3814'
		},
		{
			background: '#85c4b8',
			color: '#ffffff',
			border: '#61b2a3'
		},
		{
			background: '#8f543b',
			color: '#f5d681',
			border: '#6e3b29'
		},
		{
			background: '#ffffff',
			color: '#129c4f',
			border: '#e8e8e8'
		},
		{
			background: '#f7f4e3',
			color: '#d44735',
			border: '#d3cdac'
		},
		{
			background: '#2b4195',
			color: '#ffffff',
			border: '#1e2e76'
		},
		{
			background: '#ffd952',
			color: '#d12312',
			border: '#000000'
		},
		{
			background: '#9a101d',
			color: '#ffffff',
			border: '#000000'
		},
		{
			background: '#8D8741',
			color: '#FBEEC1',
			border: '#BC9868'
		},
		{
			background: '#05386B',
			color: '#5cDB95',
			border: '#8EE4AF'
		},
		{
			background: '#c3073f',
			color: '#000000',
			border: '#950740'
		}
		],

		shapeCategories: [
			{
				name: 'Popular Shapes',
				shapes: [
					'arrow6',
					'bubble4',
					'circle1',
					'rectangle1',
					'star1',
					'triangle1'
				]
			},
			{
				name: 'Simple Shapes',
				shapes: [
					'circle1',
					'heart1',
					'rectangle1',
					'triangle1',
					'star1',
					'star2',
					'star3',
					'square1'
				]
			},
			{
				name: 'Arrows & Pointers',
				shapes: [
					'arrow1',
					'arrow9',
					'arrow3',
					'arrow6',
				]
			},
			{
				name: 'Bubbles & Balloons',
				shapes: [
					'bubble5',
					'bubble4'
				]
			},
			{
				name: 'Check Marks',
				shapes: [

				]
			},
			{
				name: 'Badges',
				shapes: [
					'badge1',
					'badge2',
					'badge4',
					'badge5',
					'badge6'
				]
			}
		],

		JSONExportProperties: [
			'height',
			'width',
			'background',
			'objects',

			'originalHeight',
			'originalWidth',
			'originalScaleX',
			'originalScaleY',
			'originalLeft',
			'originalTop',

			'lineHeight',
			'lockMovementX',
			'lockMovementY',
			'lockScalingX',
			'lockScalingY',
			'lockUniScaling',
			'lockRotation',
			'lockObject',
			'id',
			'isTinted',
			'filters'
		],

		shapeDefaults: angular.extend({
			fill: '#0088cc'
		}, objectDefaults),

		textDefaults: angular.extend({
			originX: 'left',
			scaleX: 1,
			scaleY: 1,
			fontFamily: 'Arial',
			fontSize: 64,
			fill: '#454545',
			textAlign: 'center',
			padding: 10,
			width: 650
		}, objectDefaults)

	};

}]);

