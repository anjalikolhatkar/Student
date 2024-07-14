import React from 'react';
import Skills from './Skills';
import { Icon } from 'react-icons-kit';
import { trash } from 'react-icons-kit/feather/trash';

export const View = ({ student, deleteData }) => {

    const handleDelete = (name) => {
        deleteData(name); // Pass the unique identifier to deleteData
    };

    return (
        <>
            {student.map((student) => (
                <tr key={student.name}>
                    <td>
                        <div>
                            <p><strong>Name:</strong> {student.name}</p>
                            <p><strong>Email:</strong> {student.email}</p>
                            <p><strong>Website:</strong> <a href={student.website}>{student.website}</a></p>
                            <p><strong>Gender:</strong> {student.gender}</p>
                            <p><strong>Skills:</strong> <Skills skills={student.skills} /></p>
                        </div>
                    </td>
                    <td>
                        <img src={student.image} alt="Student" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%',  }} />
                    </td>
                    <td className='delete' onClick={() => handleDelete(student.name)}>
                        <Icon size={25} icon={trash} />
                    </td>
                </tr>
            ))}
        </>
    );
}

export default View;
