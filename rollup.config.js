import vue from 'rollup-plugin-vue';
import bundleSize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';


const isProduction = !process.env.ROLLUP_WATCH;
const globals = { vue: 'Vue' };


const plugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify( 'production' )
  }),
  resolve(),
  bundleSize(),
  vue({
    template: {
      isProduction,
      compilerOptions: { preserveWhitespace: false }
    },
  }),
  commonjs({
    include: /node_modules/,
    namedExports: ['ag-grid-vue', 'ag-grid-community']
  }),       
];

export default {
  
  input: 'src/entry.js',
  output: {
    globals,
    file: 'dist/bundle.js',
    format: 'umd'
  },
  plugins,
  onwarn: (msg, warn) => {
    if (msg.code === 'THIS_IS_UNDEFINED') return;
    if (!/Circular/.test(msg)) {
        warn(msg)
    }
}
};
