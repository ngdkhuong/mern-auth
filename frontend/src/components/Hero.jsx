import { Container, Card, Button } from 'react-bootstrap';

const Hero = () => {
    return (
        <div className="py-5">
            <Container className="d-flex justify-content-center">
                <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
                    <h1 className="text-center mb-4">MERN Authentication</h1>
                    <p className="text-center mb-4">
                        Đây là dự án MERN authentication có sử dụng JWT lưu vào HTTP-Only cookie, dùng Redux Toolkit và
                        React Bootstrap để làm giao diện
                    </p>
                    <div className="d-flex">
                        <Button variant="primary" href="/login" className="me-3">
                            Đăng nhập
                        </Button>
                        <Button variant="secondary" href="/register">
                            Đăng ký
                        </Button>
                    </div>
                </Card>
            </Container>
        </div>
    );
};

export default Hero;
