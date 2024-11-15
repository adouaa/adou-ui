import React, { useState } from 'react';
import Rate from '../components/adou-rate';
import Form from 'components/adou-new-form';
import AdouInput from 'components/adou-new-form/adou-Input';
import AdouCheckbox from 'components/adou-new-form/adou-checkbox';
import LiveSearch from 'components/adou-new-form/adou-live-search';
import AdouRadio from 'components/adou-new-form/adou-radio';
import RetrievrSelect from 'components/adou-new-form/adou-retrieve-select';
import Select from 'components/adou-new-form/adou-select';
import TagInput from 'components/adou-new-form/adou-tag-input';
import TextArea from 'components/adou-new-form/adou-textarea';
import './index.scss';

const Table = ({ rows, cols }) => {
    const [isSelecting, setIsSelecting] = useState(false);
    const [selectedCells, setSelectedCells] = useState([]);
    const [startCell, setStartCell] = useState<any>(null);

    // 开始选择
    const handleMouseDown = (row, col, event) => {
        const isMultiSelect = event.ctrlKey || event.metaKey; // 检查是否按下 Ctrl 或 Command 键

        setIsSelecting(true);
        setStartCell({ row, col });

        setSelectedCells((prevSelectedCells: any) => {
            if (isMultiSelect) {
                // 多选模式：添加或移除单元格
                const cellExists = prevSelectedCells.some(([r, c]) => r === row && c === col);
                if (cellExists) {
                    return prevSelectedCells.filter(([r, c]) => !(r === row && c === col));
                } else {
                    return [...prevSelectedCells, [row, col]];
                }
            } else {
                // 单选模式：清空之前的选择，仅选中当前单元格
                return [[row, col]];
            }
        });
    };

    // 正在选择
    const handleMouseEnter = (row, col, event) => {
        if (isSelecting && startCell) {
            const newSelectedCells: any = [];
            const [minRow, maxRow] = [startCell.row, row].sort((a, b) => a - b);
            const [minCol, maxCol] = [startCell.col, col].sort((a, b) => a - b);

            for (let r = minRow; r <= maxRow; r++) {
                for (let c = minCol; c <= maxCol; c++) {
                    newSelectedCells.push([r, c]);
                }
            }
            setSelectedCells(newSelectedCells);
        }
    };

    // 停止选择
    const handleMouseUp = () => {
        setIsSelecting(false);
    };

    // 判断是否为选中的单元格
    const isSelected = (row, col) => {
        return selectedCells.some(([r, c]: any) => r === row && c === col);
    };

    return (
        <>
            <table onMouseLeave={handleMouseUp} onMouseUp={handleMouseUp}>
                <tbody>
                    {Array.from({ length: rows }).map((_, row) => (
                        <tr key={row}>
                            {Array.from({ length: cols }).map((_, col) => (
                                <td
                                    key={col}
                                    className={isSelected(row, col) ? 'selected' : ''}
                                    onMouseDown={(e) => handleMouseDown(row, col, e)}
                                    onMouseEnter={(e) => handleMouseEnter(row, col, e)}
                                />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            Result: {selectedCells.join(',')}
        </>
    );
};

const App = () => <Table rows={10} cols={10}></Table>;

export default App;
