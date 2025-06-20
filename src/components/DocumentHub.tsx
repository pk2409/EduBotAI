
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { FileText, Upload, Search, Download, Star } from 'lucide-react';

export const DocumentHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Documents' },
    { id: 'notes', name: 'Notes' },
    { id: 'papers', name: 'Past Papers' },
    { id: 'solutions', name: 'Solutions' },
    { id: 'guides', name: 'Study Guides' },
  ];

  const documents = [
    {
      id: 1,
      title: "Calculus Integration Techniques",
      type: "notes",
      subject: "Mathematics",
      author: "Anonymous",
      date: "2 days ago",
      downloads: 45,
      rating: 4.8,
      tags: ["calculus", "integration", "mathematics"]
    },
    {
      id: 2,
      title: "Physics Mechanics Past Paper 2023",
      type: "papers",
      subject: "Physics",
      author: "Study Group Alpha",
      date: "1 week ago",
      downloads: 78,
      rating: 4.9,
      tags: ["mechanics", "physics", "exam"]
    },
    {
      id: 3,
      title: "Organic Chemistry Reaction Guide",
      type: "guides",
      subject: "Chemistry",
      author: "ChemMaster",
      date: "3 days ago",
      downloads: 62,
      rating: 4.7,
      tags: ["organic", "chemistry", "reactions"]
    },
    {
      id: 4,
      title: "Linear Algebra Solutions Set 5",
      type: "solutions",
      subject: "Mathematics",
      author: "MathHelper",
      date: "5 days ago",
      downloads: 34,
      rating: 4.6,
      tags: ["linear algebra", "solutions", "mathematics"]
    }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesCategory = selectedCategory === 'all' || doc.type === selectedCategory;
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search documents, topics, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Upload className="h-4 w-4 mr-2" />
          Upload Document
        </Button>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Document Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDocuments.map((doc) => (
          <Card key={doc.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <FileText className="h-8 w-8 text-blue-600 mb-2" />
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  {doc.rating}
                </div>
              </div>
              <CardTitle className="text-lg line-clamp-2">{doc.title}</CardTitle>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{doc.subject}</Badge>
                <Badge variant="outline" className="capitalize">{doc.type}</Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="text-sm text-gray-600">
                <div className="flex justify-between items-center mb-1">
                  <span>By {doc.author}</span>
                  <span>{doc.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  {doc.downloads} downloads
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {doc.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2">
                <Button size="sm" className="flex-1">
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Button>
                <Button size="sm" variant="outline">
                  Preview
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Upload Guidelines */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-900">Document Sharing Guidelines</CardTitle>
        </CardHeader>
        <CardContent className="text-blue-800">
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>All documents are automatically scanned and tagged by AI</li>
            <li>Share original work or properly attributed materials only</li>
            <li>High-quality documents earn more XP and badges</li>
            <li>Documents are anonymized unless you choose to be credited</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
