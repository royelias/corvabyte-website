import { BrandMark, Wordmark } from './Logo.jsx';

// Small illustrative preview for each service tab.
const Sk = ({ w, h, acc, pill }) => (
  <div
    className={`sk${acc ? ' acc' : ''}`}
    style={{ width: w, height: h, borderRadius: pill ? 999 : undefined }}
  />
);

function WebMock() {
  return (
    <div className="mock" aria-hidden="true">
      <div className="bar3"><i /><i /><i /></div>
      <Sk w="38%" h={22} />
      <Sk w="72%" />
      <Sk w="28%" h={30} acc pill />
      <div className="mrow">
        {[['60%', '80%'], ['50%', '70%'], ['65%', '55%']].map(([a, b], i) => (
          <div className="mcard" key={i}><Sk w={a} /><Sk /><Sk w={b} /></div>
        ))}
      </div>
    </div>
  );
}

function MobileMock() {
  return (
    <div className="mock center" aria-hidden="true">
      <div className="phone">
        <div className="sk" style={{ width: '40%', height: 8, marginInline: 'auto' }} />
        <Sk w="70%" h={16} />
        <div className="mcard" style={{ flex: 'none' }}><Sk h={46} acc /><Sk w="70%" /></div>
        <div className="mcard" style={{ flex: 'none' }}><Sk w="55%" /><Sk /></div>
        <Sk h={28} acc pill />
      </div>
    </div>
  );
}

function DataMock() {
  return (
    <div className="mock" aria-hidden="true">
      <div className="bar3"><i /><i /><i /></div>
      <div className="code">
        <span className="c">// GET /v1/orders?status=open</span>{'\n'}
        <span className="t">const</span> orders = <span className="t">await</span> db.collection(<span className="s">'orders'</span>){'\n'}
        {'  '}.find({'{'} status: <span className="s">'open'</span>, tenantId {'}'}){'\n'}
        {'  '}.sort({'{'} createdAt: -1 {'}'}){'\n'}
        {'  '}.limit(<span className="s">50</span>){'\n'}
        {'  '}.toArray();{'\n\n'}
        <span className="c">// p50 42ms · p99 180ms · index: status_1_createdAt_-1</span>
      </div>
    </div>
  );
}

function BrandMock() {
  return (
    <div className="mock" aria-hidden="true">
      <div className="brand-lockup"><BrandMark size={84} /><Wordmark /></div>
      <div className="swatches">
        {['#07090d', '#151b25', '#2d8cff', '#eef2f6'].map((c) => <i key={c} style={{ background: c }} />)}
      </div>
      <Sk w="60%" />
      <Sk w="40%" />
    </div>
  );
}

const mocks = { web: WebMock, mobile: MobileMock, data: DataMock, brand: BrandMock };

export default function ServiceMock({ id }) {
  const Mock = mocks[id];
  return <Mock />;
}
