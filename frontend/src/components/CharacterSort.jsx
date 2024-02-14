import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select.jsx";

export default function CharacterSort({ sort, handleChangeSort }) {
    return (
        <Select value={sort} onValueChange={handleChangeSort}>
            <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="name">A - Z</SelectItem>
                    <SelectItem value="-name">Z - A</SelectItem>
                    <SelectItem value="health">Health Ascending</SelectItem>
                    <SelectItem value="-health">Health Descending</SelectItem>
                    <SelectItem value="-movement">Movement Ascending</SelectItem>
                    <SelectItem value="movement">Movement Descending</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}