import fs from 'fs';
import path from 'path';

/**
 * Parse frontmatter from MDX content
 */
export function parseFrontmatter<T extends Record<string, unknown>>(fileContent: string) {
    const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
    const match = frontmatterRegex.exec(fileContent);

    if (!match) {
        throw new Error('No frontmatter found in content');
    }

    const frontMatterBlock = match[1];
    const content = fileContent.replace(frontmatterRegex, '').trim();
    const frontMatterLines = frontMatterBlock.trim().split('\n');
    const metadata: Record<string, string> = {};

    frontMatterLines.forEach((line) => {
        const [key, ...valueArr] = line.split(': ');
        const value = valueArr.join(': ').trim();
        metadata[key.trim()] = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
    });

    return { metadata: metadata as unknown as T, content };
}

/**
 * Get all MDX files from a directory
 */
export function getMDXFiles(dir: string): string[] {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

/**
 * Read and parse an MDX file
 */
export function readMDXFile<T extends Record<string, unknown>>(filePath: string) {
    const rawContent = fs.readFileSync(filePath, 'utf-8');

    return parseFrontmatter<T>(rawContent);
}

/**
 * Get all MDX data from a directory
 */
export function getMDXData<T extends Record<string, unknown>>(dir: string) {
    const mdxFiles = getMDXFiles(dir);

    return mdxFiles.map((file) => {
        const { metadata, content } = readMDXFile<T>(path.join(dir, file));
        const slug = path.basename(file, path.extname(file));

        return {
            metadata,
            slug,
            content
        };
    });
}

export function formatDate(date: string, includeRelative = false) {
    const currentDate = new Date();
    if (!date.includes('T')) {
        date = `${date}T00:00:00`;
    }
    const targetDate = new Date(date);

    const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
    const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
    const daysAgo = currentDate.getDate() - targetDate.getDate();

    let formattedDate = '';

    if (yearsAgo > 0) {
        formattedDate = `${yearsAgo}y ago`;
    } else if (monthsAgo > 0) {
        formattedDate = `${monthsAgo}mo ago`;
    } else if (daysAgo > 0) {
        formattedDate = `${daysAgo}d ago`;
    } else {
        formattedDate = 'Today';
    }

    const fullDate = targetDate.toLocaleString('en-us', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    if (!includeRelative) {
        return fullDate;
    }

    return `${fullDate} (${formattedDate})`;
}
