'use client';
import { Row, Col, Slider, InputNumber, Typography } from 'antd';

export default function ModelAdjustment() {
  return (
    <div className="w-sm">
      <Row gutter={[16, 16]} align="middle">
        <Col span={6}>
          <Typography.Title level={4} className="!text-sm select-none">
            temperature
          </Typography.Title>
        </Col>
        <Col span={18}>
          <Row>
            <Col span={12}>
              <Slider min={0} max={1} step={0.1} />
            </Col>
            <Col span={4}>
              <InputNumber
                min={0}
                max={1}
                step={0.1}
                style={{ margin: '0 16px' }}
              />
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Typography.Title level={4} className="!text-sm select-none">
            top_p
          </Typography.Title>
        </Col>
        <Col span={18}>
          <Row>
            <Col span={12}>
              <Slider min={0} max={1} step={0.1} />
            </Col>
            <Col span={4}>
              <InputNumber
                min={0}
                max={1}
                step={0.1}
                style={{ margin: '0 16px' }}
              />
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Typography.Title level={4} className="!text-sm select-none">
            frequency_penalty
          </Typography.Title>
        </Col>
        <Col span={18}>
          <Row>
            <Col span={12}>
              <Slider min={0} max={1} step={0.1} />
            </Col>
            <Col span={4}>
              <InputNumber
                min={0}
                max={1}
                step={0.1}
                style={{ margin: '0 16px' }}
              />
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Typography.Title level={4} className="!text-sm select-none">
            presence_penalty
          </Typography.Title>
        </Col>
        <Col span={18}>
          <Row>
            <Col span={12}>
              <Slider min={0} max={1} step={0.1} />
            </Col>
            <Col span={4}>
              <InputNumber
                min={0}
                max={1}
                step={0.1}
                style={{ margin: '0 16px' }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
