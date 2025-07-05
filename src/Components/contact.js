import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // تأكد من استيراد Bootstrap CSS

import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

function ContactSection() {
  // استخدام useState لإدارة حالة النموذج (اختياري، ولكنها ممارسة جيدة)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة منطق لإرسال النموذج، مثل:
    // - إرسال البيانات إلى API (باستخدام fetch أو axios)
    // - إظهار رسالة نجاح/خطأ للمستخدم
    console.log('Form data submitted:', formData);
    alert('Message sent successfully! (Check console for data)');
    // يمكنك مسح النموذج بعد الإرسال
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-5 bg-light"> {/* أضف ID للملاحة، bg-light لخلفية خفيفة */}
      <Container>
        {/* العنوان الرئيسي والوصف */}
        <Row className="justify-content-center text-center mb-5">
          <Col md={8} lg={6}>
            <h2 className="display-4 fw-bold mb-3">Get In Touch</h2>
            <p className="lead text-muted">
              I'd love to hear from you. Whether you have a question, a project idea, or just
              want to say hello, feel free to reach out.
            </p>
          </Col>
        </Row>

        {/* أقسام النموذج ومعلومات الاتصال */}
        <Row className="justify-content-center g-4"> {/* g-4 لإضافة مسافة بين الأعمدة/البطاقات */}
          {/* قسم "Send Me a Message" (النموذج) */}
          <Col lg={6} md={10}> {/* يأخذ 6 أعمدة على الشاشات الكبيرة، 10 على المتوسطة */}
            <Card className="shadow-sm h-100"> {/* h-100 لضمان نفس الارتفاع */}
              <Card.Body className="p-4">
                <Card.Title className="h4 mb-4">Send Me a Message</Card.Title>
                <p className="text-muted mb-4">Fill out the form below and I'll get back to you as soon as possible.</p>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Doaa Harras"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="harras.doe@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formMessage">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control
                      as="textarea" // يجعلها منطقة نص متعددة الأسطر
                      rows={5} // عدد الصفوف الافتراضي
                      placeholder="Type your message here..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100"> {/* w-100 لجعل الزر بكامل العرض */}
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* قسم "Let's Connect" (معلومات الاتصال) */}
          <Col lg={4} md={10}> {/* يأخذ 4 أعمدة على الشاشات الكبيرة، 10 على المتوسطة */}
            <Card className="shadow-sm h-100">
              <Card.Body className="p-4">
                <Card.Title className="h4 mb-4">Let's Connect</Card.Title>
                <p className="text-muted mb-4">
                  Ready to turn ideas into reality? Whether you have a project in mind, a
                  collaboration opportunity, or just want to chat about tech, I'm eager to hear
                  from you.
                </p>

                <ul className="list-unstyled"> {/* لإزالة نقاط القائمة */}
                  <li className="mb-3 d-flex align-items-center">
                    <FaEnvelope size={20} className="me-3 text-primary" /> {/* أيقونة البريد */}
                    <a href="mailto:harrasdoaa@gmail.com" className="text-decoration-none text-dark">
                      harrasdoaa@gmail.com
                    </a>
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <FaWhatsapp size={20} color="green"  className="me-3 text-primary" /> {/* أيقونة LinkedIn */}
                    <a href="https://wa.me/201050688345" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                      WhatsApp
                    </a>
                  </li>
                </ul>

                <p className="mt-4 text-muted">Looking forward to connecting!</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactSection;
