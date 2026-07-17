import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const DescriptionForm = ({ description, onSave, onCancel, isEditing }) => {
  const [tempDescription, setTempDescription] = useState(description || "");

  const handleSave = () => {
    onSave(tempDescription);
  };

  if (isEditing) {
    return (
      <Form className="flex-grow-1">
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={4}
            value={tempDescription}
            onChange={(e) => setTempDescription(e.target.value)}
            className="bg-dark text-light border-secondary"
          />
        </Form.Group>
        <div className="d-flex gap-2">
          <Button 
            type="button" 
            variant="success" 
            onClick={handleSave}
          >
            Save
          </Button>
          <Button 
            type="button" 
            variant="secondary" 
            onClick={onCancel}
          >
            Cancel
          </Button>
        </div>
      </Form>
    );
  }

  return (
    <div className="flex-grow-1">
      {description}
    </div>
  );
};

export default DescriptionForm;