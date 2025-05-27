import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ThumbsUp, ThumbsDown, BarChart, PieChart, MessageSquare } from 'lucide-react';

const UserFeedbackTab = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Feedback Engagement Count</CardTitle>
            <div className="h-4 w-4 text-primary">
              <MessageSquare className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5,872</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
            <CardDescription className="mt-2 text-xs">Total count of chatbot interactions with user feedback</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sentiment Score</CardTitle>
            <div className="h-4 w-4 text-primary">
              <BarChart className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+0.62</div>
            <p className="text-xs text-muted-foreground">+0.08 from last month</p>
            <CardDescription className="mt-2 text-xs">Average sentiment score (-1 to +1 scale)</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Satisfaction Rate</CardTitle>
            <div className="h-4 w-4 text-success">
              <ThumbsUp className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78.4%</div>
            <p className="text-xs text-muted-foreground">+3.2% from last month</p>
            <CardDescription className="mt-2 text-xs">Percentage of feedback classified as positive</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Dissatisfaction Rate</CardTitle>
            <div className="h-4 w-4 text-destructive">
              <ThumbsDown className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">21.6%</div>
            <p className="text-xs text-muted-foreground">-3.2% from last month</p>
            <CardDescription className="mt-2 text-xs">Percentage of feedback classified as negative</CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>Feedback Category Count</CardTitle>
            <CardDescription>Frequency of each specific feedback option</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Fast and efficient</p>
                </div>
                <div className="flex items-center">
                  <div className="w-32 h-4 bg-gray-100 rounded-full overflow-hidden mr-2">
                    <div className="bg-primary h-full" style={{ width: '68%' }}></div>
                  </div>
                  <span className="text-sm font-medium">68%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Helpful answers</p>
                </div>
                <div className="flex items-center">
                  <div className="w-32 h-4 bg-gray-100 rounded-full overflow-hidden mr-2">
                    <div className="bg-primary h-full" style={{ width: '52%' }}></div>
                  </div>
                  <span className="text-sm font-medium">52%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Easy to use</p>
                </div>
                <div className="flex items-center">
                  <div className="w-32 h-4 bg-gray-100 rounded-full overflow-hidden mr-2">
                    <div className="bg-primary h-full" style={{ width: '45%' }}></div>
                  </div>
                  <span className="text-sm font-medium">45%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Slow and inefficient</p>
                </div>
                <div className="flex items-center">
                  <div className="w-32 h-4 bg-gray-100 rounded-full overflow-hidden mr-2">
                    <div className="bg-destructive h-full" style={{ width: '18%' }}></div>
                  </div>
                  <span className="text-sm font-medium">18%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Incorrect answers</p>
                </div>
                <div className="flex items-center">
                  <div className="w-32 h-4 bg-gray-100 rounded-full overflow-hidden mr-2">
                    <div className="bg-destructive h-full" style={{ width: '12%' }}></div>
                  </div>
                  <span className="text-sm font-medium">12%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Difficult to navigate</p>
                </div>
                <div className="flex items-center">
                  <div className="w-32 h-4 bg-gray-100 rounded-full overflow-hidden mr-2">
                    <div className="bg-destructive h-full" style={{ width: '8%' }}></div>
                  </div>
                  <span className="text-sm font-medium">8%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>Channel Specific Feedback Comparison</CardTitle>
            <CardDescription>Breakdown of positive and negative feedback by channel</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Web</p>
                </div>
                <div className="flex items-center">
                  <div className="w-32 h-4 bg-gray-100 rounded-full overflow-hidden mr-2">
                    <div className="bg-success h-full" style={{ width: '82%' }}></div>
                  </div>
                  <span className="text-sm font-medium">82% positive</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Teams</p>
                </div>
                <div className="flex items-center">
                  <div className="w-32 h-4 bg-gray-100 rounded-full overflow-hidden mr-2">
                    <div className="bg-success h-full" style={{ width: '76%' }}></div>
                  </div>
                  <span className="text-sm font-medium">76% positive</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">WhatsApp</p>
                </div>
                <div className="flex items-center">
                  <div className="w-32 h-4 bg-gray-100 rounded-full overflow-hidden mr-2">
                    <div className="bg-success h-full" style={{ width: '71%' }}></div>
                  </div>
                  <span className="text-sm font-medium">71% positive</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Mobile App</p>
                </div>
                <div className="flex items-center">
                  <div className="w-32 h-4 bg-gray-100 rounded-full overflow-hidden mr-2">
                    <div className="bg-success h-full" style={{ width: '68%' }}></div>
                  </div>
                  <span className="text-sm font-medium">68% positive</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserFeedbackTab;
